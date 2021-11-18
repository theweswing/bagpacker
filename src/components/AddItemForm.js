import { useState } from "react";

function AddItemForm({
  activeBag,
  activeUser,
  setActiveUser,
  setActiveBag,
  activeBagNum,
}) {
  const [newItem, setNewItem] = useState("");

  function handleChange(e) {
    setNewItem(e.target.value);
    // console.log(newItem);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(activeBag);
    const currentItemsLocation = `items${activeBagNum}`;
    const activeUserID = activeUser.id;
    fetch(`http://localhost:3000/users/${activeUserID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [currentItemsLocation]: [...activeBag, newItem],
      }),
    })
      .then((r) => r.json())
      .then(() => {
        fetch(`http://localhost:3000/users/${activeUserID}`)
          .then((r) => r.json())
          .then((data) => {
            setActiveUser(data);
            setActiveBag([...activeBag, newItem]);
          });
      });
    e.target.reset();
  }
  return (
    <div>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add New Item"
        ></input>
        <button type="submit">Add To Bag</button>
      </form>
    </div>
  );
}

export default AddItemForm;
