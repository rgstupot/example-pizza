// Third-party libraries
import { Link } from "react-router-dom";

function CallOrder() {
  return (
    <div className="my-5 grid grid-cols-2 items-center gap-2 mx-2 xl:flex xl:justify-center">
      <button className="uppercase bg-red-700 p-1 text-slate-50 hover:bg-red-600 hover:font-semibold outline-none xl:w-1/3">
        call
      </button>
      <Link
        to="order"
        className="uppercase bg-red-700 p-1 text-slate-50 hover:bg-red-600 hover:font-semibold outline-none xl:w-1/3 text-center"
      >
        order online
      </Link>
    </div>
  );
}

export default CallOrder;
