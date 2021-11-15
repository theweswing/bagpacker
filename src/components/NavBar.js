import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="">Current Bag</NavLink>
      <NavLink to="">All Bags</NavLink>
    </div>
  );
}

export default NavBar;