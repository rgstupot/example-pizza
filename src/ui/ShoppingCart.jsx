// Third-party libraries
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

// Context
import { useCart } from "../context/CartContext";

function ShoppingCart() {
  // Getting cart contents from context
  const { cartItems } = useCart();

  return (
    <Link to="cart">
      <div className="relative py-2">
        <div className="t-0 absolute left-3">
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-slate-50 p-3 text-xs text-red-600">
            {cartItems.length}
          </p>
        </div>
        <HiOutlineShoppingCart className="mt-3 h-[2rem] w-auto p-1 flex flex-col items-center hover:cursor-pointer text-slate-50 hover:bg-red-600 rounded-md" />
      </div>
    </Link>
  );
}

export default ShoppingCart;
