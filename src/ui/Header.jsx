import MainNav from "./MainNav";

function Header() {
  return (
    <>
      <header className="grid grid-cols-3 h-[10rem] lg:h-[15rem]">
        <div className="bg-green-700"></div>
        <div className="bg-white flex justify-center items-center">
          <img
            src="example_pizza_logo.webp"
            alt="Example Pizza Logo"
            className="h-[10rem] lg:h-[15rem] w-auto"
          />
        </div>
        <div className="bg-red-700"></div>
      </header>
      <nav>
        <MainNav />
      </nav>
    </>
  );
}

export default Header;
