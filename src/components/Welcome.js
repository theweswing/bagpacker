import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div id="welcomePage">
      <h2>Welcome to Bagpacker!</h2>
      <p>
        Going to work? Going on vacation? Make sure you have everything with
        Bagpacker!
      </p>
      <Link to={"/login"}>
        <button>Sign Up or Sign In</button>
      </Link>
    </div>
  );
}
export default Welcome;
