import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import CurrentBag from "./CurrentBag";
import AllBags from "./AllBags";
import {useState,useEffect} from "react"

function App() {
  const [userLoggedIn,setUserLoggedIn]=useState(false)
  const [allItemsDaily,setAllItemsDaily]=useState([])
  const [activeItemsDaily,setActiveItemsDaily]=useState([])
  const [allItemsBagOne,setAllItemsBagOne]=useState([])
  const [activeItemsBagOne,setActiveItemsBagOne]=useState([])
  const [allItemsBagTwo,setAllItemsBagTwo]=useState([])
  const [activeItemsBagTwo,setActiveItemsBagTwo]=useState([])
  const [allItemsBagThree,setAllItemsBagThree]=useState([])
  const [activeItemsBagThree,setActiveItemsBagThree]=useState([])
  const [allItemsBagFour,setAllItemsBagFour]=useState([])
  const [activeItemsBagFour,setActiveItemsBagFour]=useState([])
  const [currentBag,setCurrentBag]=useState(allItemsDaily)

  return (
    <div className="App">
      <h1>Bag Packer</h1>
      <NavBar />

      <Switch>
        {userLoggedIn ? (
          <Route exact path="/">
            <CurrentBag currentBag={currentBag} />
          </Route>
        ) : (
          <Route exact path="/">
            <Welcome  currentBag={currentBag} setCurrentBag={setCurrentBag} activeItemsBagFour={activeItemsBagFour} setActiveItemsBagFour={setActiveItemsBagFour}  activeItemsBagThree={activeItemsBagThree} setActiveItemsBagThree={setActiveItemsBagThree}  activeItemsBagTwo={activeItemsBagTwo} setActiveItemsBagTwo={setActiveItemsBagTwo}  activeItemsBagOne={activeItemsBagOne} setActiveItemsBagOne={setActiveItemsBagOne} allItemsBagFour={allItemsBagFour} setAllItemsBagFour={setAllItemsBagFour} allItemsBagThree={allItemsBagThree} setAllItemsBagThree={setAllItemsBagThree}  allItemsBagTwo={allItemsBagTwo} setAllItemsBagTwo={setAllItemsBagTwo} allItemsBagOne={allItemsBagOne} setAllItemsBagOne={setAllItemsBagOne} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}   allItemsDaily={allItemsDaily} setAllItemsDaily={setAllItemsDaily} activeItemsDaily={activeItemsDaily} setActiveItemsDaily={setActiveItemsDaily} />
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