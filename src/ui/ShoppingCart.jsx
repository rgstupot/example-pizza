import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

function ShoppingCart() {
  return (
    <Link to="cart">
      <HiOutlineShoppingCart className="h-[2rem] w-auto p-1 flex flex-col items-center hover:cursor-pointer text-slate-50 hover:bg-red-600 rounded-md" />
    </Link>
  );
}

export default ShoppingCart;
