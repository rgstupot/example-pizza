// Third party libraries
import { useParams } from "react-router-dom";

// Context
import { useCart } from "../../context/CartContext";

// UI libaries
import EditBuildOrder from "./EditBuildOrder";
import EditSpecialityOrder from "./EditSpecialtyOrder";
import EditSpecialtyPickThreeOrder from "./EditSpecialtyPickThreeOrder";
import EditVarietyDeluxeOrder from "./EditVarietyDeluxeOrder";

function EditOrder() {
  // Grabbing cart item ID from URL
  const { id } = useParams();

  // Getting cart contents from context
  const { cartItems } = useCart();

  // Getting cart item to edit by ID
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
