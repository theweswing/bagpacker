// import { useState } from "react";

function ItemCard({
  item,
  activeBag,
  setActiveBag,
  activeBagNum,
  activeUser,
  setActiveUser,
}) {
  // const [inBag, setInBag] = useState(false);

  // function handlePacked(e) {
  //   setInBag(!inBag);
  // }

  function handleDelete(e) {
    const bagMinusDelete = [...activeBag].filter((givenItem) => {
      return givenItem !== item;
    });
    setActiveBag(bagMinusDelete);
    const currentItemsLocation = `items${activeBagNum}`;
    const activeUserID = activeUser.id;
    fetch(`${process.env.REACT_APP_API_URL}/users/${activeUserID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [currentItemsLocation]: bagMinusDelete,
      }),
    })
      .then((r) => r.json())
      .then(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users/${activeUserID}`)
          .then((r) => r.json())
          .then((data) => setActiveUser(data));
      });
  }

  return (
    <tr>
      <td>{item}</td>
      <td>
        <input className="checkbox" type="checkbox" id={`${item}checkbox`} />
      </td>
      <td>
        <button onClick={handleDelete}>♺</button>
      </td>
    </tr>
  );
}

export default ItemCard;
