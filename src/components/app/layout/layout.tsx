import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function Layout() {
  return (
    <div className="h-screen w-screen">
      <header>
        <Navbar.Mobile />
        <Navbar.Desktop />
      </header>
      <main className="pt-20 lg:pt-0">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
