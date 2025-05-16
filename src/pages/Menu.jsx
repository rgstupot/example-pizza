// UI libraries
import BuildYourOwn from "../features/menu/BuildYourOwn";
import MenuItem from "../features/menu/MenuItem";
import menuPizzas from "../data/menuPizzas.json";

function Menu() {
  return (
    <div className="flex flex-col px-2 py-2 gap-5 lg:mx-[10rem] md:mx-[5rem]">
      <BuildYourOwn />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {menuPizzas.map((menuPizza) => (
          <MenuItem key={menuPizza.pizzaName} pizza={menuPizza} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
