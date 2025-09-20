import { NavLink } from "react-router-dom";

interface Props {
  href: string;
  name: string;
}

function NavbarLink({ href, name }: Props) {
  return (
    <NavLink
      className="text-primary text-3xl font-bold transition-all duration-300 ease-in-out hover:-translate-y-1 lg:text-lg"
      to={href}
    >
      {name}
    </NavLink>
  );
}

export default NavbarLink;
