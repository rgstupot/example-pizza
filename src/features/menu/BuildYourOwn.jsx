function BuildYourOwn() {
  return (
    <div className="flex justify-between items-center p-2 bg-red-700 text-red-50 border-2 border-red-950 shadow-md shadow-red-950">
      <div className="flex flex-col gap-5">
        <h1 className="font-extrabold text-xl">Build Your Own Pizza</h1>
        <div className="flex flex-col gap-1">
          <h2 className="text-sm">Toppings</h2>
          <h3 className="italic text-xs">
            pepperoni, sausage, ham, bacon, mushrooms, onions, sausage, bacon,
            black olives, green peppers, pineapple, spinach
          </h3>
          <h2 className="text-xs">$0.40 each</h2>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm">Small</h2>
            <h1>$9.99</h1>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-sm">Medium</h2>
            <h1>$10.99</h1>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-sm">Large</h2>
            <h1>$11.99</h1>
          </div>
        </div>
      </div>
      <img
        src="build_your_own.webp"
        alt="Build Your Own Pizza"
        className="h-[5rem] md:h-[7rem] lg:h-[8rem] xl:h-[10rem] w-auto rounded-md"
      />
    </div>
  );
}

export default BuildYourOwn;
