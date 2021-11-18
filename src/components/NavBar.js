import { NavLink } from "react-router-dom";

function NavBar({ userLoggedIn, activeBagName, activeUser }) {
  return (
    <div>
      {userLoggedIn ? (
        <>
          <p id="getPacking">Get packing, {activeUser.name}!</p>
          <nav>
            <NavLink to={"/current/" + activeBagName}>{activeBagName}</NavLink>
            <NavLink to="/allbags">All Bags</NavLink>
          </nav>
        </>
      ) : (
        <nav>
          <NavLink
            onClick={() =>
              alert(
                "Please Login or Sign Up To Access Bags! (Don't worry, you can use a dummy email)"
              )
            }
            to={`/current/${activeBagName}`}
          >
            Current Bag
          </NavLink>
          <NavLink
            onClick={() =>
              alert(
                "Please Login or Sign Up To Access Bags! (Don't worry, you can use a dummy email)"
              )
            }
            to="/allbag"
          >
            All Bags
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
