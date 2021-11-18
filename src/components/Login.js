import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({
  setActiveBag,
  setActiveUser,
  setUserLoggedIn,
  setActiveBagName,
}) {
  const [userState, setUserState] = useState({
    name: "",
    email: "",
    bag1: "Daily",
    items1: ["Stuff", "Things"],
    bag2: "New Bag",
    items2: ["Stuff", "Things"],
    bag3: "New Bag",
    items3: ["Stuff", "Things"],
    bag4: "New Bag",
    items4: ["Stuff", "Things"],
    bag5: "New Bag",
    items5: ["Stuff", "Things"],
  });
  const [newUser, setNewUser] = useState(true);

  const history = useHistory();

  function handleReturningUser(e) {
    setNewUser(!newUser);
  }

  let userinDB = false;

  function handleChange(e) {
    setUserState({ ...userState, [e.target.name]: e.target.value });
    //   console.log(userState);
  }

  function handleLogin(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) => {
        const userBase = [...data];
        let counter = 0;
        for (const user of userBase) {
          if (
            user.email.toLowerCase().includes(userState.email.toLowerCase())
          ) {
            alert(`Start packing, ${user.name}!`);
            counter = counter + 1;
            setUserLoggedIn(user.id);
            fetch(`http://localhost:3000/users/${user.id}`)
              .then((r) => r.json())
              .then((data) => {
                // console.log(data);
                setActiveUser(data);
                setActiveBag(data.items1);
                setActiveBagName(data.bag1);
                history.push(`/current/${data.bag1}`);
              });
          }
        }
        if (counter === 0) {
          alert("Email not found! Please sign up and try again!");
        }
        e.target.reset();
      });
  }

  function handleSignUp(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) => {
        const userBase = [...data];
        // console.log(userBase)
        for (const user of userBase) {
          if (
            user.email.toLowerCase().includes(userState.email.toLowerCase())
          ) {
            alert("You already have an account! Log In To Continue");
            userinDB = true;
          }
        }
        if (userinDB === false) {
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userState),
          })
            .then((r) => r.json())
            .then((data) => {
              alert(
                "Welcome to Bagpacker! Your information is in no way secure."
              );
              //   history.push("/currentbag/" + data.id);
              handleLogin(e);
            });
        }
      });

    e.target.reset();
  }

  return (
    <div id="loginPage">
      {newUser ? (
        <div>
          <h3>New To Bagpacker?</h3>
          <p>Enter Your Name and Email to get started!</p>
          <form onSubmit={handleSignUp}>
            <label>Name: </label>
            <input onChange={handleChange} type="text" name="name"></input>
            <br></br>
            <br></br>
            <label>Email: </label>
            <input onChange={handleChange} type="email" name="email"></input>
            <br></br>
            <br></br>
            <button className="welcomebuttons" type="submit">Sign Up!</button>
          </form>
          <button className="welcomebuttons" onClick={handleReturningUser}>
            I Already Have An Account
          </button>
        </div>
      ) : (
        <div>
          <h3>Returning to Bagpacker?</h3>
          <p>Enter your Name and Email to Retrieve your Bags!</p>
          <form onSubmit={handleLogin}>
            <label>Name: </label>
            <input onChange={handleChange} type="text" name="name"></input>
            <br></br>
            <br></br>
            <label>Email: </label>
            <input onChange={handleChange} type="email" name="email"></input>
            <br></br>
            <br></br>
            <button className="welcomebuttons" type="submit">Log In!</button>
          </form><br></br>
          <button className="welcomebuttons" onClick={handleReturningUser}>
            Wait, I don't have an account actually
          </button>
        </div>
      )}
      <br></br>
    </div>
  );
}
export default Login;
