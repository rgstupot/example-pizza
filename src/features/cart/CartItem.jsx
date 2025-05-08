import { useCart } from "../../context/CartContext";
import { BsArrowUpSquare, BsArrowDownSquare, BsTrash3 } from "react-icons/bs";

function CartItem({ pizza }) {
  const { editCartItem, removeFromCart } = useCart();

  const toppingList = pizza.toppings.map((topping) => topping).join(", ");

  function changeQuantity(itemId, newQuantity) {
    editCartItem(itemId, { quantity: newQuantity });
  }

  return (
    <div className="m-2 p-2 sm:m-3 sm:p-3 md:m-4 md:p-4 border border-slate-900 shadow-md shadow-slate-400 flex justify-between bg-slate-100">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        <div>
          <h2 className="font-extrabold sm:text-lg md:text-xl">
            {pizza.pizzaName}
          </h2>
          <h3 className="text-sm sm:text-base md:text-lg">{pizza.size}</h3>
        </div>
        <h3 className="text-pretty text-xs sm:text-sm md:text-base italic">
          {toppingList}
        </h3>
      </div>
      <div className="flex gap-3 sm:gap-4 md:gap-5">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="flex flex-col gap-1 sm:gap-2">
            <button
              onClick={() => changeQuantity(pizza.id, pizza.quantity + 1)}
              className="p-1.5 rounded-md hover:bg-slate-200"
            >
              <BsArrowUpSquare className="h-[1.5rem] sm:h-[1.6rem] md:h-[1.7rem] w-auto" />
            </button>
            <button
              disabled={pizza.quantity == 1}
              onClick={() => changeQuantity(pizza.id, pizza.quantity - 1)}
              className="disabled:text-gray-400 p-1.5 rounded-md enabled:hover:bg-slate-200"
            >
              <BsArrowDownSquare className="h-[1.5rem] sm:h-[1.6rem] md:h-[1.7rem] w-auto" />
            </button>
          </div>
          <span className="sm:text-lg md:text-xl">x</span>
          <span className="sm:text-lg md:text-xl">{pizza.quantity}</span>
        </div>
        <div className="flex items-center font-extrabold sm:text-lg md:text-xl">
          {(pizza.price * pizza.quantity).toFixed(2)}
        </div>
        <div className="flex items-center">
          <button
            onClick={() => removeFromCart(pizza.id)}
            className="p-1.5 rounded-md hover:bg-slate-200"
          >
            <BsTrash3 className="h-[1.5rem] sm:h-[1.6rem] md:h-[1.7rem] w-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
