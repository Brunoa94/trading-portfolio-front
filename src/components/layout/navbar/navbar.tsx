"use client";

import Login from "../../features/auth/loginAuthentication/login";
import NavbarLink from "./navbarLink";
import { useScrollDetection } from "./useScrollDetection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { NavbarStyles } from "@/theme/navbar";
import { Gradient } from "@/theme/gradient";
import { cn } from "@/lib/utils";
import {
  LucideBitcoin,
  MenuIcon,
  User,
  ArrowLeftRight,
  Globe,
  TrendingUp,
} from "lucide-react";
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
  icon: React.ComponentType<{ className?: string }>;
}

const ROUTES: LinkI[] = [
  {
    href: "/profile",
    name: "Profile",
    icon: User,
  },
  {
    href: "/transactions",
    name: "Transactions",
    icon: ArrowLeftRight,
  },
  {
    href: "/global",
    name: "Overview",
    icon: Globe,
  },
  {
    href: "/market",
    name: "Market",
    icon: TrendingUp,
  },
];

function NavLinks() {
  return (
    <>
      {ROUTES.map((route: LinkI) => (
        <NavbarLink
          href={route.href}
          name={route.name}
          icon={route.icon}
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
        <button
          aria-label="Open menu"
          className="group from-accent/10 to-primary/10 border-border/20 hover:from-accent/20 hover:to-primary/20 hover:border-accent/30 hover:shadow-accent/20 focus-visible:ring-accent absolute left-4 flex items-center gap-2 rounded-lg border bg-gradient-to-r px-3 py-2 transition-all duration-300 hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none"
        >
          <MenuIcon className="text-primary group-hover:text-accent h-5 w-5 transition-colors duration-200" />
          <span className="text-primary group-hover:text-accent text-sm font-medium transition-colors duration-200">
            Menu
          </span>
        </button>
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
  const { isScrolled } = useScrollDetection();

  return (
    <nav
      className={cn(
        NavbarStyles.Base,
        "justify-center gap-8 lg:hidden!",
        isScrolled && NavbarStyles.ScrolledBackground
      )}
    >
      <MobileMenu />
      <HomepageLink />
      <Login />
    </nav>
  );
}

function Desktop() {
  const { isScrolled } = useScrollDetection();

  return (
    <nav
      className={cn(
        NavbarStyles.Base,
        "text-primary relative hidden gap-8 text-lg md:justify-center lg:flex!",
        isScrolled && NavbarStyles.ScrolledBackground
      )}
    >
      <HomepageLink />
      <NavLinks />
      <Login />
    </nav>
  );
}

function HomepageLink() {
  const { isScrolled } = useScrollDetection();

  return (
    <NavLink
      to="/"
      className="focus-visible:ring-accent relative flex items-center gap-3 rounded-lg text-xl transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none lg:absolute! lg:left-4"
    >
      <div
        className={`relative flex items-center justify-center rounded-xl border p-3 transition-all duration-300 ${
          isScrolled
            ? `${Gradient.LogoContainer} border-accent/30 shadow-lg shadow-accent/20`
            : 'bg-transparent border-border/20'
        }`}
      >
        <div className="relative">
          <LucideBitcoin
            height={28}
            width={28}
            className="fill-primary stroke-primary drop-shadow-sm transition-all duration-300"
          />
        </div>
      </div>
      <h1 className="text-primary font-semibold tracking-tight transition-all duration-300">
        Capital Lens
      </h1>
    </NavLink>
  );
}

const Navbar = {
  Mobile,
  Desktop,
};

export default Navbar;
