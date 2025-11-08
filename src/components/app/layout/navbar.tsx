"use server";

import Login from "../features/login/login";
import NavbarLink from "./navbarLink";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { LucideBitcoin, MenuIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

type RoutesT =
  | "/profile"
  | "/transactions"
  | "/global"
  | "/transactions/:id"
  | "/market";

interface LinkI {
  href: RoutesT;
  name: string;
}

const ROUTES: LinkI[] = [
  {
    href: "/profile",
    name: "Profile",
  },
  {
    href: "/transactions",
    name: "Transactions",
  },
  {
    href: "/global",
    name: "Overview",
  },
  {
    href: "/market",
    name: "Market",
  },
];

function NavLinks() {
  return (
    <>
      {ROUTES.map((route: LinkI) => (
        <NavbarLink
          href={route.href}
          name={route.name}
          key={`${route.href}-${route.name}`}
        />
      ))}
    </>
  );
}

function MobileMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="absolute left-4">
          <MenuIcon />
          <span>Menu</span>
        </Button>
      </DialogTrigger>
      <DialogContent
        style={{ transform: "translateY(50%)" }}
        className="fixed top-0 mt-16 w-screen flex-col gap-6 border-none bg-transparent px-4"
      >
        <DialogTitle className="hidden text-3xl">Menu</DialogTitle>
        <NavLinks />
      </DialogContent>
    </Dialog>
  );
}

function Mobile() {
  return (
    <nav className="border-primary fixed top-0 left-0 flex h-16 w-full items-center justify-center gap-8 border-b px-4 lg:hidden!">
      <MobileMenu />
      <HomepageLink />
      <Login />
    </nav>
  );
}

function Desktop() {
  return (
    <nav className="border-primary text-primary relative hidden h-16 w-full items-center gap-8 border-b px-4 text-lg md:justify-center lg:flex!">
      <HomepageLink />
      <NavLinks />
      <Login />
    </nav>
  );
}

function HomepageLink() {
  return (
    <NavLink
      to="/"
      className="relative flex items-center gap-2 text-xl lg:absolute! lg:left-4"
    >
      <LucideBitcoin
        height={44}
        width={44}
        className="fill-primary stroke-primary"
      />
      <h1 className="text-primary">Capital Lens</h1>
    </NavLink>
  );
}

const Navbar = {
  Mobile,
  Desktop,
};

export default Navbar;
