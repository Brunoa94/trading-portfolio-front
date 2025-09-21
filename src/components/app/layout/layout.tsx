import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function Layout() {
  return (
    <div className="h-screen w-screen">
      <header>
        <Navbar.Mobile />
        <Navbar.Desktop />
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default Layout;
