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
      {user ? <CurrentBag /> : <Welcome />}
      <AllBags />
    </div>
  );
}

export default App;
