import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainNav from "./MainNav";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="font-roboto  h-screen bg-slate-200">
      <div className="bg-slate-50 grid grid-rows-[max-content_1fr] lg:mx-[10rem]">
        <header>
          <Header />
        </header>
        <nav>
          <MainNav />
        </nav>
        <main className="mb-5">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default AppLayout;
