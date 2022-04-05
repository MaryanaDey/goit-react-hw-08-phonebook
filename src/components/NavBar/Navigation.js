import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <NavLink to="/" exact>
        Головна
      </NavLink>
    </div>
  );
}