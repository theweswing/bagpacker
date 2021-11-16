import { useState } from "react";

function BagCard({
  setActiveBagNum,
  bagname,
  bagitems,
  bagnum,
  activeBag,
  activeBagName,
  setActiveBag,
  setActiveBagName,
  activeUser,
}) {
  function topThreeItems() {
    const topThreeItems = bagitems.slice(0, 3);
    const displayThree = topThreeItems.map((givenItem) => {
      return <p key={givenItem}>{givenItem}</p>;
    });
    return displayThree;
  }

  function switchActiveBag() {
    const newBagLocation = `activeUser.items${bagnum}`;
    console.log(eval(newBagLocation));
    const newBagName = `activeUser.bag${bagnum}`;
    console.log(eval(newBagName));
    setActiveBag(eval(newBagLocation));
    setActiveBagName(eval(newBagName));
    setActiveBagNum(bagnum);
    console.log(bagnum);
  }

  function displayBagContents() {
    if (bagname !== "New Bag") {
      return (
        <div>
          <h3>{bagname.toUpperCase()}</h3>
          <button onClick={switchActiveBag}>Select Bag</button>
        </div>
      );
    } else {
      return (
        <div>
          <br></br>
          <br></br>
          <button onClick={switchActiveBag}>Add New Bag</button>
        </div>
      );
    }
  }
  return <div className="current-bag-view">{displayBagContents()}</div>;
}

export default BagCard;
