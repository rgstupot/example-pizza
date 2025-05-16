// Third party libraries
import { useNavigate } from "react-router-dom";

// Context
import { useCart } from "../../context/CartContext";

// UI libraries
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  // Getting cart data/functions from cart context
  const { cartItems, clearCart } = useCart();

  // Setting navigate function
  const navigate = useNavigate();

  // Calculating subtotal, tax, and total
  function calculateSubtotal(cart) {
    let subTotal = 0;
    for (const item of cart) {
      subTotal += item.price * item.quantity;
    }
    return subTotal;
  }

  const subTotal = calculateSubtotal(cartItems);
  const tax = subTotal * 0.07;
  const total = subTotal + tax;

  function proceed() {
    clearCart();
    navigate("/cart/thankyou");
  }

  return (
    <>
      {cartItems.length ? (
        <div className="flex flex-col">
          {cartItems.map((pizza) => (
            <CartItem pizza={pizza} key={pizza.id} />
          ))}
          <div className="flex justify-end m-2 p-2 sm:m-3 sm:p-3 md:m-4 md:p-4 md:text-xl">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-[10rem]">
                <span>Subtotal:</span>
                <span>{`$${subTotal.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between gap-[10rem]">
                <span>Tax:</span>
                <span>{`$${tax.toFixed(2)}`}</span>
              </div>
              <hr className="border-slate-900" />
              <div className="flex justify-between gap-[10rem] md:gap-[20rem]">
                <span>Total:</span>
                <span>{`$${total.toFixed(2)}`}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center md:justify-end m-2 p-2 sm:m-3 sm:p-3 md:m-4 md:p-4">
            <button
              onClick={() => navigate("/order")}
              className="md:w-[75%] lg:w-[50%] xl:w-[25%] p-2 rounded-md bg-red-700 uppercase text-slate-50 hover:bg-red-500 font-extrabold"
            >
              continue ordering
            </button>
            <button
              onClick={() => proceed()}
              className="md:w-[75%] lg:w-[50%] xl:w-[25%] p-2 rounded-md bg-red-700 uppercase text-slate-50 hover:bg-red-500 font-extrabold"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
