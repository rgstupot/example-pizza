import MainNav from "./MainNav";
import ShoppingCart from "./ShoppingCart";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartItems } = useCart();

  function calculateSubtotal(cart) {
    let subTotal = 0;
    for (const item of cart) {
      subTotal += item.price * item.quantity;
    }
    return subTotal;
  }

  const subTotal = calculateSubtotal(cartItems);

  return (
    <>
      <header className="grid grid-cols-3 h-[10rem] lg:h-[15rem]">
        <div className="bg-green-700"></div>
        <div className="bg-white flex justify-center items-center">
          <img
            src="/example_pizza_logo.webp"
            alt="Example Pizza Logo"
            className="h-[10rem] lg:h-[15rem] w-auto"
          />
        </div>
        <div className="bg-red-700 flex justify-end py-5 px-2">
          <div className="flex flex-col items-center">
            <ShoppingCart />
            {cartItems.length > 0 && (
              <span className="text-slate-50 text-xs sm:text-sm md:text-base">{`$${subTotal.toFixed(
                2
              )}`}</span>
            )}
          </div>
        </div>
      </header>
      <nav>
        <MainNav />
      </nav>
    </>
  );
}

export default Header;
