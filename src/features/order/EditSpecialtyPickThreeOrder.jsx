import { useForm } from "react-hook-form";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function EditSpecialtyPickThreeOrder({ cartItemToEdit }) {
  const { editCartItem } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...cartItemToEdit,
    },
  });

  function onSubmit(data, e) {
    e.preventDefault();
    editCartItem(data.id, data);
    navigate("/cart");
  }

  const specialtyPizzas = [
    "All Meat",
    "Deluxe",
    "Garden",
    "Hawaiian Chicken",
    "Pepperoni Magnifico",
    "White Cheezy",
  ];

  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between p-2 bg-red-700 text-red-50 border-2 border-red-950 shadow-md shadow-red-950">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Specialty Pick Three - Deal</h1>
          <h2 className="text-lg font-semibold">
            Pick three specialty pizzas.
          </h2>
          <ul className="flex flex-wrap gap-5">
            {specialtyPizzas.map((pizza, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  id={pizza}
                  name={pizza}
                  value={pizza}
                  {...register("toppings", {
                    required: "*You must select three pizzas.",
                    validate: (value) =>
                      value.length === 3 || "*You must select three pizzas.",
                  })}
                  className="hidden peer"
                />
                <label
                  htmlFor={pizza}
                  className="p-2 bg-slate-50 text-slate-900 rounded-md uppercase flex items-center peer-checked:bg-green-700 peer-checked:text-green-50 peer-checked:font-bold cursor-pointer peer-checked:ring-green-700 peer-checked:ring-4 hover:bg-slate-200 hover:font-semibold"
                >
                  {pizza}
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
      </div>
    </div>
  );
}

export default EditSpecialtyPickThreeOrder;
