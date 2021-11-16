import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import CurrentBag from "./CurrentBag";
import AllBags from "./AllBags";
import Login from "./Login";
import { useState, useEffect } from "react";

function App() {
  const [activeUser, setActiveUser] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [activeBag, setActiveBag] = useState("");
  const [activeBagName, setActiveBagName] = useState("");

  return (
    <div className="App">
      <h1>Bag Packer</h1>
      <q>
        <i>Never Leave Home Without It</i>
      </q>
      {userLoggedIn && (
        <NavBar userLoggedIn={userLoggedIn} activeBagName={activeBagName} />
      )}
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        {userLoggedIn && (
          <Switch>
            <Route exact path="/current/:bag">
              <CurrentBag
                setActiveBag={setActiveBag}
                activeUser={activeUser}
                activeBag={activeBag}
                activeBagName={activeBagName}
                setActiveBagName={setActiveBagName}
              />
            </Route>
            <Route exact path="/allbags">
              <AllBags
                activeUser={activeUser}
                activeBag={activeBag}
                setActiveBag={setActiveBag}
                activeBagName={activeBagName}
                setActiveBagName={setActiveBagName}
              />
            </Route>
          </Switch>
        )}

        <Route exact path="/login">
          <Login
            setActiveBag={setActiveBag}
            setUserLoggedIn={setUserLoggedIn}
            setActiveUser={setActiveUser}
            setActiveBagName={setActiveBagName}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// activeItemsBagFour={activeItemsBagFour} setActiveItemsBagFour={setActiveItemsBagFour} activeItemsBagThree={activeItemsBagThree} setActiveItemsBagThree={setActiveItemsBagThree} activeItemsBagTwo={activeItemsBagTwo} setActiveItemsBagTwo={setActiveItemsBagTwo} activeItemsBagOne={activeItemsBagOne} setActiveItemsBagOne={setActiveItemsBagOne} allItemsDaily={allItemsDaily} setAllItemsDaily={setAllItemsDaily} activeItemsDaily={activeItemsDaily} setActiveItemsDaily={setActiveItemsDaily} allItemsBagOne={allItemsBagOne} setAllItemsBagOne={setAllItemsBagOne} allItemsBagTwo={allItemsBagTwo} setAllItemsBagTwo={setAllItemsBagTwo} allItemsBagThree={allItemsBagThree} setAllItemsBagThree={setAllItemsBagThree} allItemsBagFour={allItemsBagFour} setAllItemsBagFour={setAllItemsBagFour}

// {activeItemsBagOne,setActiveItemsBagOne,activeItemsBagTwo,setActiveItemsBagTwo,activeItemsBagThree,setActiveItemsBagThree,activeItemsBagFour,setActiveItemsBagFour,allItemsDaily,setAllItemsDaily,activeItemsDaily,setActiveItemsDaily,allItemsBagOne,setAllItemsBagOne,allItemsBagTwo,setAllItemsBagTwo,allItemsBagThree,setAllItemsBagThree,allItemsBagFour,setAllItemsBagFour}

// useEffect( () => {
//   fetch(`http://localhost:3000/users/${userLoggedIn}`)
//   .then((r) => r.json())
//   .then((data) => console.log(data))
//   fetch(`http://localhost:3000/dailies/${userLoggedIn}`)
//   .then((r) => r.json())
//   .then((data) => {
//     setAllItemsDaily(data)
//     setActiveItemsDaily(data)
//     console.log(data)
//   })
//   fetch(`http://localhost:3000/addBagOne/${userLoggedIn}`)
//   .then((r) => r.json())
//   .then((data) => {
//     setAllItemsBagOne(data)
//     setActiveItemsBagOne(data)
//     console.log(data)

//   })
//   fetch(`http://localhost:3000/addBagTwo/${userLoggedIn}`)
//   .then((r) => r.json())
//   .then((data) => {
//     setAllItemsBagTwo(data)
//     setActiveItemsBagTwo(data)
//     console.log(data)

//   })
//   fetch(`http://localhost:3000/addBagThree/${userLoggedIn}`)
//   .then((r) => r.json())
//   .then((data) => {
//     setAllItemsBagThree(data)
//     setActiveItemsBagThree(data)
//     console.log(data)

//   })
//   fetch(`http://localhost:3000/addBagFour/${userLoggedIn}`)
//   .then((r) => r.json())
//   .then((data) => {
//     setAllItemsBagFour(data)
//     setActiveItemsBagFour(data)
//     console.log(data)

//   })
// },userLoggedIn)
