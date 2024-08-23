// Third-party libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// UI libraries
import AppLayout from "./ui/AppLayout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Coupons from "./pages/Coupons";
import Rewards from "./pages/Rewards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Main />} />
          <Route path="menu" element={<Menu />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="rewards" element={<Rewards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
