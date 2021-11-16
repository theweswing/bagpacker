import { NavLink,Switch } from "react-router-dom";

function NavBar({userLoggedIn,activeBagName}) {
  return (
    <div>
    {userLoggedIn ? (
    <nav>
      <NavLink to="/">{activeBagName}</NavLink>
      <NavLink to="/allbags">All Bags</NavLink>
    </nav>
    ) : 
    <nav>
    <NavLink onClick={() => alert("Please Login or Sign Up To Access Bags! (Don't worry, you can use a dummy email)")} to="/">Current Bag</NavLink>
    <NavLink onClick={() => alert("Please Login or Sign Up To Access Bags! (Don't worry, you can use a dummy email)")} to="/">All Bags</NavLink>
  </nav>}</div>
  );
}

export default NavBar;
