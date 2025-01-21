import { Link } from "react-router-dom";

function OrderBuildYourOwn() {
  return (
    <div className="flex justify-between items-center p-2 bg-red-700 text-red-50 border-2 border-red-950 shadow-md shadow-red-950">
      <div className="flex flex-col gap-5">
        <h1 className="font-extrabold text-xl">Build Your Own Pizza</h1>
        <div className="flex flex-col gap-1">
          <h2 className="text-sm">Toppings</h2>
          <h3 className="italic text-xs">
            pepperoni, sausage, ham, bacon, mushrooms, onions, sausage, bacon,
            black olives, green peppers, pineapple, spinach
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/order/build">
            <button className="p-2 rounded-md bg-slate-50 hover:bg-slate-200 uppercase text-slate-900 font-extrabold">
              build now
            </button>
          </Link>
        </div>
      </div>
      <img
        src="build_your_own.webp"
        alt="Build Your Own Pizza"
        className="h-[5rem] md:h-[7rem] lg:h-[8rem] xl:h-[10rem] w-auto rounded-md"
      />
    </div>
  );
}

export default OrderBuildYourOwn;
