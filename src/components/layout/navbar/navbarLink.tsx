import { NavLink } from "react-router-dom";

interface Props {
  href: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

function NavbarLink({ href, name, icon: Icon }: Props) {
  return (
    <NavLink
      className="flex items-center gap-2 text-foreground font-notch text-3xl font-bold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-purple-800 hover:opacity-80 lg:text-lg"
      to={href}
    >
      <Icon className="h-5 w-5" />
      {name}
    </NavLink>
  );
}

export default NavbarLink;
