import MainNav from "./MainNav";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Header() {
  return (
    <>
      <header className="grid grid-cols-3 h-[10rem] lg:h-[15rem]">
        <div className="bg-green-700"></div>
        <div className="bg-white flex justify-center items-center">
          <img
            src="example_pizza_logo.webp"
            alt="Example Pizza Logo"
            className="h-[10rem] lg:h-[15rem] w-auto"
          />
        </div>
        <div className="bg-red-700 flex justify-end p-5">
          <HiOutlineShoppingCart className="text-white h-[2.5rem] w-[2.5rem] cursor-pointer rounded-full p-2 hover:bg-red-600">
            1
          </HiOutlineShoppingCart>
        </div>
      </header>
      <nav>
        <MainNav />
      </nav>
    </>
  );
}

export default Header;
