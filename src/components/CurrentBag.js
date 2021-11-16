import ItemCard from "./ItemCard";
import AddItemForm from "./AddItemForm";
import { useState } from "react";

function CurrentBag({
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
        setActiveBag={setActiveBag}
        activeUser={activeUser}
        activeBag={activeBag}
        activeBagName={activeBagName}
      />
    </div>
  );
}

export default CurrentBag;
