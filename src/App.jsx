// Third-party libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// UI libraries
import AppLayout from "./ui/AppLayout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Deals from "./pages/Deals";
import Rewards from "./pages/Rewards";
import { CartProvider } from "./context/CartContext";
import Order from "./pages/Order";
import Cart from "./features/cart/Cart";
import BuildOrder from "./features/order/BuildOrder";
import SpecialityOrder from "./features/order/SpecialityOrder";
import VarietyDeluxeOrder from "./features/order/VarietyDeluxeOrder";
import SpecialtyPickThreeOrder from "./features/order/SpecialtyPickThreeOrder";
import EditOrder from "./features/order/EditOrder";
import ThankYou from "./features/cart/ThankYou";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Main />} />
            <Route path="menu" element={<Menu />} />
            <Route path="deals" element={<Deals />} />
            <Route
              path="deals/varietydeluxe"
              element={<VarietyDeluxeOrder />}
            />
            <Route
              path="deals/specialtypickthree"
              element={<SpecialtyPickThreeOrder />}
            />
            <Route path="rewards" element={<Rewards />} />
            <Route path="order" element={<Order />} />
            <Route path="order/build" element={<BuildOrder />} />
            <Route path="order/:pizzaName" element={<SpecialityOrder />} />
            <Route path="order/edit/:id" element={<EditOrder />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cart/thankyou" element={<ThankYou />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
