import { Link } from "react-router";

function NavItem({ label, path }) {
  return (
    <Link
      to={path}
      className="text-sm text-gray-600 transition-colors hover:text-gray-950">
      {label}
    </Link>
  );
}

export default NavItem;
