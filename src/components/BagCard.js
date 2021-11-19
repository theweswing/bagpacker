// import { useState } from "react";
import { Link } from "react-router-dom";

function BagCard({
  setActiveBagNum,
  bagname,
  bagnum,
  setActiveBag,
  setActiveBagName,
  activeUser,
}) {
  // function topThreeItems() {
  //   const topThreeItems = bagitems.slice(0, 3);
  //   const displayThree = topThreeItems.map((givenItem) => {
  //     return <p key={givenItem}>{givenItem}</p>;
  //   });
  //   return displayThree;
  // }

  function switchActiveBag() {
    const newBagLocation = `activeUser.items${bagnum}`;
    // console.log(eval(newBagLocation));
    const newBagName = `activeUser.bag${bagnum}`;
    // eslint-disable-next-line
    setActiveBag(eval(newBagLocation));
    // eslint-disable-next-line
    setActiveBagName(eval(newBagName));
    setActiveBagNum(bagnum);
    // console.log(bagnum);
  }

  function displayBagContents() {
    if (bagname !== "New Bag") {
      return (
        <div>
          <h3>{bagname.toUpperCase()}</h3>
          <Link to={`/current/${bagname}`}>
            <button onClick={switchActiveBag}>Select Bag</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <br></br>
          <br></br>
          <Link to={`/current/${bagname}`}>
            <button onClick={switchActiveBag}>Add New Bag</button>
          </Link>
        </div>
      );
    }
  }
  return <div className="current-bag-view">{displayBagContents()}</div>;
}

export default BagCard;
