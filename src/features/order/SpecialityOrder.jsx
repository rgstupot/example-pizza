// Third-party libraries
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

// Context
import { useCart } from "../../context/CartContext";

// Data
import menuPizzas from "../../data/menuPizzas.json";
import sizes from "../../data/sizes";

function SpecialityOrder() {
  // Getting pizza name from URL
  const { pizzaName } = useParams();

  // Getting add function from context
  const { addToCart } = useCart();

  // Setting up navigate function
  const navigate = useNavigate();

  // Grabbing menu data based on pizza name
  const selectedPizza = menuPizzas.find(
    (pizza) => pizza.pizzaName === pizzaName
  );

  // Setting up react-hook-form with required functions and default data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: uuidv4(),
      pizzaName: pizzaName,
      toppings: selectedPizza.toppings,
      quantity: 1,
      price: 0.0,
    },
  });

  // Form submission handler
  function onSubmit(data, e) {
    e.preventDefault();
    switch (data.size) {
      case "small":
        data.price = data.price + selectedPizza.smallPrice;
        break;
      case "medium":
        data.price = data.price + selectedPizza.mediumPrice;
        break;
      case "large":
        data.price = data.price + selectedPizza.largePrice;
        break;
    }
    addToCart(data);
    navigate("/cart");
  }

  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between p-2 bg-red-700 text-red-50 border-2 border-red-950 shadow-md shadow-red-950">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">{pizzaName}</h1>
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
          <div>
            <button className="p-2 bg-slate-50 text-slate-900 rounded-md uppercase flex items-center cursor-pointer hover:bg-slate-200 hover:font-semibold">
              add to cart
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

export default SpecialityOrder;
