// Third-party libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// UI libraries
import AppLayout from "./ui/AppLayout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Coupons from "./pages/Coupons";
import Rewards from "./pages/Rewards";
import { CartProvider } from "./context/CartContext";
import Order from "./pages/Order";
import Cart from "./features/cart/Cart";
import BuildOrder from "./features/order/BuildOrder";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Main />} />
            <Route path="menu" element={<Menu />} />
            <Route path="coupons" element={<Coupons />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="order" element={<Order />} />
            <Route path="order/build" element={<BuildOrder />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
