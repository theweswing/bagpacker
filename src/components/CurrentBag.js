import ItemCard from "./ItemCard";
import AddItemForm from "./AddItemForm";
import { useState } from "react";

function CurrentBag({
  setActiveUser,
  activeBagNum,
  setActiveBag,
  activeBag,
  activeUser,
  activeBagName,
  setActiveBagName,
}) {
  const [renamedBag, setRenamedBag] = useState(false);
  const [newBagName, setNewBagName] = useState("");

  function spawnCards() {
    console.log(activeBag);
    const bagItems = [...activeBag];
    console.log(bagItems);
    if (bagItems.length > 0) {
      const itemsToDisplay = bagItems.map((givenItem) => {
        return (
          <ItemCard
            activeBagNum={activeBagNum}
            activeUser={activeUser}
            setActiveUser={setActiveUser}
            item={givenItem}
            key={givenItem}
            activeBag={activeBag}
            setActiveBag={setActiveBag}
          />
        );
      });
      return itemsToDisplay;
    }
    if (bagItems.length === 0) {
      return <tr>Put some stuff in your bag!</tr>;
    }
  }

  function triggerRename(e) {
    setRenamedBag(!renamedBag);
  }

  function handleChange(e) {
    setNewBagName(e.target.value);
    console.log(newBagName);
  }

  function handleNameChange(e) {
    e.preventDefault();
    setActiveBagName(newBagName);
    setRenamedBag(!renamedBag);
    console.log(activeBagNum);
    const currentBagNameLocation = `bag${activeBagNum}`;
    const activeUserID = activeUser.id;
    console.log(currentBagNameLocation);
    console.log(activeUserID);
    fetch(`http://localhost:3000/users/${activeUserID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [currentBagNameLocation]: newBagName,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        fetch(`http://localhost:3000/users/${activeUserID}`)
          .then((r) => r.json())
          .then((data) => setActiveUser(data));
      });
  }

  return (
    <div className="current-bag-view">
      <h3 className="displayedactivebagname" id={activeBagName}>
        {activeBagName.toUpperCase()} <button onClick={triggerRename}>✎</button>
      </h3>
      <hr />
      {renamedBag ? (
        <form onSubmit={handleNameChange}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="New Bag Name"
          ></input>
          <button type="submit">Change Bag Name</button>
        </form>
      ) : null}
      <table>
        <thead>
          <tr>
            <th></th>
            <th id="item-row">Item</th>

            <th>In Bag?</th>
          </tr>
        </thead>

        <tbody>{spawnCards()}</tbody>
      </table>
      <br></br>
      <br></br>
      <AddItemForm
        activeBagNum={activeBagNum}
        setActiveBag={setActiveBag}
        activeUser={activeUser}
        setActiveUser={setActiveUser}
        activeBag={activeBag}
        activeBagName={activeBagName}
      />
    </div>
  );
}

export default CurrentBag;
