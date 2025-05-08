import { useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import SizeSelector from "../../ui/SizeSelector";
import ToppingSelector from "../../ui/ToppingSelector";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs";
import { useForm } from "react-hook-form";

function BuildOrder() {
  const {
      register,
      watch,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        id: uuidv4(),
        pizzaName: "Build Your Own"
      },
    });

  function onSubmit(data, e) {
    e.preventDefault();
    console.log(data);
  }

  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1);
  }

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

  const sizes = [
    "small",
    "medium",
    "large"
  ]

  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between p-2 bg-red-700 text-red-50 border-2 border-red-950 shadow-md shadow-red-950">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Build Your Pizza</h1>
          <div className="flex-col items-center gap-6">
            <h2 className="pb-2 text-lg font-semibold">Size</h2>
            <ul className="flex gap-6">
              {sizes.map((size, i) => (
                <li key={i}>
                  <input
                    type="radio"
                    id={size}
                    name="size"
                    value={size}
                    {...register("size", {
                      required: "You must select a size.",
                    })}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={size}
                    className="p-2 bg-slate-50 text-slate-900 rounded-md uppercase flex items-center peer-checked:bg-green-700 peer-checked:text-green-50 peer-checked:font-bold cursor-pointer peer-checked:ring-green-700 peer-checked:ring-4 hover:bg-slate-200 hover:font-semibold"
                  >
                    {size}
                  </label>
                </li>
              ))}      
            </ul>
            {errors.size && (
                <span className="font-bold text-base">{errors?.size?.message}</span>
              )}
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
            <span className="text-xl">{quantity}</span>
            <div className="flex flex-col gap-1 sm:gap-2">
              <button
                className="p-1.5 rounded-md hover:bg-red-500"
                onClick={increaseQuantity}
              >
                <BsArrowUpSquare className="h-[1.5rem] sm:h-[1.6rem] md:h-[1.7rem] w-auto" />
              </button>
              <button
                disabled={quantity == 1}
                className="disabled:text-slate-400 p-1.5 rounded-md enabled:hover:bg-red-500"
                onClick={decreaseQuantity}
              >
                <BsArrowDownSquare className="h-[1.5rem] sm:h-[1.6rem] md:h-[1.7rem] w-auto" />
              </button>
            </div>
          </div>
          <hr className="border-red-50" />
          <h1 className="text-xl font-extrabold">$420.69</h1>
          <button>submit</button>
        </form>
        <img
          src="/build_your_own.webp"
          alt="Build Your Own Pizza"
          className="hidden md:flex h-[5rem] md:h-[7rem] lg:h-[8rem] xl:h-[10rem] w-auto rounded-md"
        />
      </div>
    </div>
  );
}

export default BuildOrder;
