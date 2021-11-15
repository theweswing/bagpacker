import { NavLink,Switch } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Current Bag</NavLink>
      <NavLink to="/allbags">All Bags</NavLink>
    </nav>
  );
}

export default NavBar;
