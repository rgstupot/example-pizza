// Third-party libraries
import { LuDollarSign } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  // Setting up navigate function
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center py-5 gap-3">
      <LuDollarSign className="h-[6rem] md:h-[6.5rem] lg:h-[7rem] xl:h-[7.5rem] p-2 w-auto rounded-full border-2 border-red-700 text-red-700" />
      <h2 className="uppercase text-xl font-bold">thank you for your order</h2>
      <h3 className="uppercase text-sm">please visit again soon!</h3>
      <button
        onClick={() => navigate("/")}
        className="uppercase bg-red-700 p-2 rounded-md text-slate-50 hover:bg-red-600"
      >
        return home
      </button>
    </div>
  );
}

export default ThankYou;
