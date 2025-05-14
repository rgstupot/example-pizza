// Third Party Libraries
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Context
import { useCart } from "../../context/CartContext";

function EditBuildOrder({ cartItemToEdit }) {
  // Getting functions from context
  const { editCartItem } = useCart();

  // Setting up navigate function
  const navigate = useNavigate();

  // Getting functions from react-hook-form and populating form with cart item data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...cartItemToEdit,
      price: 0,
    },
  });

  // Form submission handler
  function onSubmit(data, e) {
    e.preventDefault();
    switch (data.size) {
      case "small":
        data.price = data.price + 9.99;
        break;
      case "medium":
        data.price = data.price + 10.99;
        break;
      case "large":
        data.price = data.price + 11.99;
        break;
    }
    data.price = data.price + data.toppings.length * 0.4;
    editCartItem(data.id, data);
    navigate("/cart");
  }

  // Static list of toppings
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

  // Static list of sizes
  const sizes = ["small", "medium", "large"];

  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between p-2 bg-red-700 text-red-50 border-2 border-red-950 shadow-md shadow-red-950">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Build Your Pizza</h1>
          <div className="flex-col items-center gap-6">
            <h2 className="pb-2 text-lg font-semibold">Size</h2>
            <ul className="flex gap-6 mb-3">
              {sizes.map((size, i) => (
                <li key={i}>
                  <input
                    type="radio"
                    id={size}
                    name="size"
                    value={size}
                    {...register("size", {
                      required: "*You must select a size.",
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
              <span className="font-bold text-base">
                {errors?.size?.message}
              </span>
            )}
          </div>
          <h2 className="text-lg font-semibold">Toppings</h2>
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
              edit order
            </button>
          </div>
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

export default EditBuildOrder;
