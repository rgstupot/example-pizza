import OrderBuildYourOwn from "./OrderBuildYourOwn";
import menuPizzas from "../../data/menuPizzas.json";
import OrderSpecialty from "./OrderSpecialty";

function OrderMain() {
  return (
    <>
      <div className="flex flex-col p-2">
        <OrderBuildYourOwn />
      </div>
      <div className="p-2 grid grid-cols-1 xl:grid-cols-2 gap-5">
        {menuPizzas.map((menuPizza) => (
          <OrderSpecialty key={menuPizza.pizzaName} pizza={menuPizza} />
        ))}
      </div>
    </>
  );
}

export default OrderMain;
