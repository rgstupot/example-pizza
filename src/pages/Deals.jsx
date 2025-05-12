import { useCart } from "../context/CartContext";
import { v4 as uuidv4 } from "uuid";
import menuPizzas from "../data/menuPizzas.json";
import { useNavigate } from "react-router-dom";

function Deals() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  function PepperoniFeast() {
    const pepperoniMagnifico = menuPizzas.find(
      (pizza) => pizza.pizzaName === "Pepperoni Magnifico"
    );

    addToCart({
      id: uuidv4(),
      pizzaName: "Pepperoni Feast - Deal",
      size: "large",
      toppings: pepperoniMagnifico.toppings,
      quantity: 3,
      price: 10,
    });

    navigate("/cart");
  }

  return (
    <div className="flex flex-col gap-5 px-4 py-2 xl:mx-[15rem] lg:mx-[10rem] md:mx-[5rem]">
      <div className="flex justify-center items-center my-5">
        <h1 className="text-3xl font-extrabold text-red-700">Current Deals</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:grid-flow-row gap-5">
        <div className="flex lg:justify-between bg-green-700 text-white p-2 outline outline-offset-2 outline-green-800 lg:row-span-2">
          <div className="flex flex-col w-full lg:w-auto">
            <h1 className="text-xl font-extrabold">Pepperoni Feast</h1>
            <p className="text-sm mt-12 mb-6">
              Three large Pepperoni Magnifico pizzas.
            </p>
            <h2 className="text-lg font-semibold mb-3">$30</h2>
            <button
              onClick={() => PepperoniFeast()}
              className="uppercase bg-red-700 p-1 text-slate-50 hover:bg-red-600 hover:font-semibold outline-none w-[10rem]"
            >
              order now
            </button>
          </div>
          <div className="xl:flex items-center hidden">
            <img
              src="pepperoni_magnifico.webp"
              alt="Pepperoni Feast"
              className="h-[15rem] w-auto rounded-md"
            />
          </div>
        </div>
        <div className="flex lg:justify-between bg-green-700 text-white p-2 outline outline-offset-2 outline-green-800">
          <div className="flex flex-col w-full lg:w-auto">
            <h1 className="text-xl font-extrabold">Variety Deluxe</h1>
            <p className="text-sm mt-12 mb-6">Large 5-topping pizza.</p>
            <h2 className="text-lg font-semibold mb-3">$12</h2>
            <button
              onClick={() => navigate("/deals/varietydeluxe")}
              className="uppercase bg-red-700 p-1 text-slate-50 hover:bg-red-600 hover:font-semibold outline-none w-[10rem]"
            >
              order now
            </button>
          </div>
          <div className="xl:flex items-center hidden">
            <img
              src="build_your_own.webp"
              alt="Variety Deluxe"
              className="h-[10rem] w-auto rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-between bg-green-700 text-white p-2 outline outline-offset-2 outline-green-800">
          <div className="flex flex-col w-full lg:w-auto">
            <h1 className="text-xl font-extrabold">Specialty Pick Three</h1>
            <p className="text-sm mt-12 mb-6">
              Any three medium specialty pizzas.
            </p>
            <h2 className="text-lg font-semibold mb-3">$25</h2>
            <button
              onClick={() => navigate("/deals/specialtypickthree")}
              className="uppercase bg-red-700 p-1 text-slate-50 hover:bg-red-600 hover:font-semibold outline-none w-[10rem]"
            >
              order now
            </button>
          </div>
          <div className="xl:flex items-center hidden">
            <img
              src="deluxe.webp"
              alt="Specialty Pick Three"
              className="h-[10rem] w-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
