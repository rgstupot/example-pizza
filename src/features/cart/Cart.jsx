import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems } = useCart();

  console.log(cartItems);

  return (
    <div className="flex flex-col">
      {cartItems.map((pizza) => (
        <CartItem pizza={pizza} key={pizza.id} />
      ))}
      <div className="flex justify-end m-2 p-2 sm:m-3 sm:p-3 md:m-4 md:p-4 md:text-xl">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-[10rem]">
            <span>Subtotal:</span>
            <span>$69.99</span>
          </div>
          <div className="flex justify-between gap-[10rem]">
            <span>Tax:</span>
            <span>$9.99</span>
          </div>
          <hr className="border-slate-900" />
          <div className="flex justify-between gap-[10rem] md:gap-[20rem]">
            <span>Total:</span>
            <span>$420.69</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
