// Third-party libraries
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Context
import { useCart } from "../../context/CartContext";

function VarietyDeluxeOrder() {
  // Getting add function from context
  const { addToCart } = useCart();

  // Setting up navigate function
  const navigate = useNavigate();

  // Setting up react-hook-form with required functions and default data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: uuidv4(),
      pizzaName: "Variety Deluxe - Deal",
      size: "large",
      quantity: 1,
      price: 12,
    },
  });

  // Form submission handler
  function onSubmit(data, e) {
    e.preventDefault();
    addToCart(data);
    navigate("/cart");
  }

  // Static toppings data
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Variety Deluxe - Deal</h1>
          <h2 className="text-lg font-semibold">Select Up To Five Toppings</h2>
          <ul className="flex flex-wrap gap-5">
            {toppings.map((topping, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  id={topping}
                  name={topping}
                  value={topping}
                  {...register("toppings", {
                    required: "*At least one topping is required.",
                    validate: (value) =>
                      value.length <= 5 ||
                      "*No more than five toppings for this deal.",
                  })}
                  className="hidden peer"
                />
                <label
                  htmlFor={topping}
                  className="p-2 bg-slate-50 text-slate-900 rounded-md uppercase flex items-center peer-checked:bg-green-700 peer-checked:text-green-50 peer-checked:font-bold cursor-pointer peer-checked:ring-green-700 peer-checked:ring-4 hover:bg-slate-200 hover:font-semibold"
                >
                  {topping}
                </label>
              </li>
            ))}
          </ul>
          {errors.toppings && (
            <span className="font-bold text-base">
              {errors?.toppings?.message}
            </span>
          )}
          <hr className="border-red-50" />

          <div>
            <button className="p-2 bg-slate-50 text-slate-900 rounded-md uppercase flex items-center cursor-pointer hover:bg-slate-200 hover:font-semibold">
              add to cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VarietyDeluxeOrder;
