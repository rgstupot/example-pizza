// Third-party libraries
import { Link } from "react-router-dom";

function OrderSpecialty({ pizza }) {
  return (
    <div className="flex justify-between items-center p-2 bg-red-700 text-red-50 border-2 border-red-950 shadow-md shadow-red-950 gap-3">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="font-extrabold text-xl">{pizza.pizzaName}</h1>
          <h2 className="text-sm">{pizza.description}</h2>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-sm">Toppings</h2>
          <h3 className="italic text-xs">
            {pizza.toppings.map((topping) => topping).join(", ")}
          </h3>
        </div>
        <div className="flex justify-between gap-5 text-xs">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm">Small</h2>
            <h1>{`$${pizza.smallPrice}`}</h1>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-sm">Medium</h2>
            <h1>{`$${pizza.mediumPrice}`}</h1>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-sm">Large</h2>
            <h1>{`$${pizza.largePrice}`}</h1>
          </div>
        </div>
        <div className="flex items-center">
          <Link to={`/order/${pizza.pizzaName}`}>
            <button className="p-2 rounded-md bg-slate-50 hover:bg-slate-200 uppercase text-slate-900 font-extrabold">
              order now
            </button>
          </Link>
        </div>
      </div>
      <img
        src={`${pizza.image}`}
        alt={`${pizza.pizzaName}`}
        className="hidden md:flex h-[5rem] md:h-[7rem] lg:h-[8rem] xl:h-[10rem] w-auto rounded-md"
      />
    </div>
  );
}

export default OrderSpecialty;
