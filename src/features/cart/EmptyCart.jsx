import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="gap-5 m-2 p-2 bg-slate-200 border-slate-900 border flex flex-col justify-center items-center">
      <h1>Your cart is empty.</h1>
      <Link to="/order">
        <button className="p-2 rounded-md bg-red-700 text-slate-50 uppercase hover:bg-red-500 font-extrabold">
          order now
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
