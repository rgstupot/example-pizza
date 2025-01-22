import SizeSelector from "../../ui/SizeSelector";
import ToppingSelector from "../../ui/ToppingSelector";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";

function BuildOrder() {
  const toppings = [
    "pepperoni",
    "sausage",
    "ham",
    "bacon",
    "mushrooms",
    "onions",
    "black olives",
    "green peppers",
    "pinapple",
    "spinach",
  ];

  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between p-2 bg-red-700 text-red-50 border-2 border-red-950 shadow-md shadow-red-950">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Build Your Pizza</h1>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">Size</h2>
            <SizeSelector sizes={["small", "medium", "large"]} />
          </div>
          <h2 className="text-lg font-semibold">Toppings</h2>
          <div className="flex flex-wrap gap-5">
            {toppings.map((topping, i) => (
              <ToppingSelector key={i} topping={topping} />
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <h2 className="text-lg font-semibold">Quantity</h2>
            <span className="text-xl">x</span>
            <span className="text-xl">1</span>
            <div className="flex flex-col gap-1 sm:gap-2">
              <button className="p-1.5 rounded-md hover:bg-red-500">
                <BsArrowUpSquare className="h-[1.5rem] sm:h-[1.6rem] md:h-[1.7rem] w-auto" />
              </button>
              <button
                disabled
                className="disabled:text-slate-400 p-1.5 rounded-md enabled:hover:bg-red-500"
              >
                <BsArrowDownSquare className="h-[1.5rem] sm:h-[1.6rem] md:h-[1.7rem] w-auto" />
              </button>
            </div>
          </div>
          <hr className="border-red-50" />
          <h1 className="text-xl font-extrabold">$420.69</h1>
        </div>
        <img
          src="/build_your_own.webp"
          alt="Build Your Own Pizza"
          className="h-[5rem] md:h-[7rem] lg:h-[8rem] xl:h-[10rem] w-auto rounded-md"
        />
      </div>
    </div>
  );
}

export default BuildOrder;
