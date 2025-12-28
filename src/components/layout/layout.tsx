import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import TitleDescription from "./titleDescription";
import Footer from "./footer";

function Layout() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <header className="sticky top-0 z-40 w-full">
        <Navbar.Mobile />
        <Navbar.Desktop />
      </header>
      <TitleDescription />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
