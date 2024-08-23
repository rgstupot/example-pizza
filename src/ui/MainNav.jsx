import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="grid grid-cols-4 text-slate-950 divide-x-2 divide divide-slate-300">
      <Link
        to="/"
        className="flex justify-center items-center uppercase py-2 hover:bg-slate-100 hover:font-semibold outline-none"
      >
        home
      </Link>
      <Link
        to="menu"
        className="flex justify-center items-center uppercase py-2 hover:bg-slate-100 hover:font-semibold outline-none"
      >
        menu
      </Link>
      <Link
        to="coupons"
        className="flex justify-center items-center uppercase py-2 hover:bg-slate-100 hover:font-semibold outline-none"
      >
        coupons
      </Link>
      <Link
        to="rewards"
        className="flex justify-center items-center uppercase py-2 hover:bg-slate-100 hover:font-semibold outline-none"
      >
        rewards
      </Link>
    </nav>
  );
}

export default MainNav;
