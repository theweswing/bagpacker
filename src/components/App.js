import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import CurrentBag from "./CurrentBag";
import AllBags from "./AllBags";

function App() {
  const user = false;
  return (
    <div className="App">
      <h1>Bag Packer</h1>
      <NavBar />
      <Switch>
        {user ? (
          <Route exact path="/">
            <CurrentBag />
          </Route>
        ) : (
          <Route exact path="/">
            <Welcome />
          </Route>
        )}
        <Route path="/allbags">
          <AllBags />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
