import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h2>Welcome to Bagpacker!</h2>
      <p>
        Going to work? Going on vacation? Make sure you have everything with
        Bagpacker!
      </p>
      <Link to={"/login"}>
        <button>Sign Up</button>
      </Link>
    </div>
  );
}
export default Welcome;
