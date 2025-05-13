import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import EditBuildOrder from "./EditBuildOrder";
import EditSpecialityOrder from "./EditSpecialtyOrder";
import EditSpecialtyPickThreeOrder from "./EditSpecialtyPickThreeOrder";
import EditVarietyDeluxeOrder from "./EditVarietyDeluxeOrder";

function EditOrder() {
  const { id } = useParams();
  const { cartItems } = useCart();

  const cartItemToEdit = cartItems.find((cartItem) => cartItem.id === id);

  return (
    <div>
      {cartItemToEdit.pizzaName === "Build Your Own" ? (
        <EditBuildOrder cartItemToEdit={cartItemToEdit} />
      ) : cartItemToEdit.pizzaName === "Specialty Pick Three - Deal" ? (
        <EditSpecialtyPickThreeOrder cartItemToEdit={cartItemToEdit} />
      ) : cartItemToEdit.pizzaName === "Variety Deluxe - Deal" ? (
        <EditVarietyDeluxeOrder cartItemToEdit={cartItemToEdit} />
      ) : (
        <EditSpecialityOrder cartItemToEdit={cartItemToEdit} />
      )}
    </div>
  );
}

export default EditOrder;
