function Location() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="uppercase text-xl font-semibold">location</h1>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1>555 Pizza Way</h1>
        <h1>Pizzatown, WV 55555</h1>
      </div>
      <div className="flex flex-col justify-center items-center py-1 px-3 rounded-md hover:bg-slate-300 cursor-pointer">
        <img
          src="google_maps_logo.webp"
          alt="Google Maps Logo"
          className="h-[3rem] w-[3rem] sm:h-[6rem] sm:w-[6rem]"
        />
      </div>
    </div>
  );
}

export default Location;
