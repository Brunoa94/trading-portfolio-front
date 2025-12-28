import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import TitleDescription from "./titleDescription";
import Footer from "./footer";
import { Gradient } from "@/theme/gradient";

function Layout() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <header
        className={`${Gradient.GrayCard} border-border/50 sticky top-0 z-40 w-full rounded-b-md border-b bg-gradient-to-r shadow-lg`}
      >
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
