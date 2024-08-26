import { Outlet } from "react-router-dom";
import Header from "./Header";

import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="bg-slate-50 grid grid-rows-[max-content_1fr] h-screen font-roboto">
      <header>
        <Header />
      </header>
      <main className="mb-5">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
