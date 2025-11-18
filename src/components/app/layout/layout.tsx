import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function Layout() {
  return (
    <div className="flex h-screen w-screen flex-col items-center">
      <header className="from-card via-card to-card/80 border-border/50 sticky top-0 z-40 w-full rounded-b-md border-b bg-gradient-to-r shadow-lg">
        <Navbar.Mobile />
        <Navbar.Desktop />
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default Layout;
