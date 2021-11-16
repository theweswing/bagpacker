import {useState} from "react"

function ItemCard({item,activeBag,setActiveBag,activeBagNum,activeUser,setActiveUser}){

const [inBag,setInBag]=useState(false)

function handlePacked(e){
    setInBag(!inBag)
}

function handleDelete(e){
    const bagMinusDelete=[...activeBag].filter((givenItem) => {
        return (givenItem !==item)
    })
    setActiveBag(bagMinusDelete)
    const currentItemsLocation=`items${activeBagNum}`
    const activeUserID=activeUser.id
    fetch(`http://localhost:3000/users/${activeUserID}`,{
      method: "PATCH",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        [currentItemsLocation]:bagMinusDelete
      })
    })
    .then((r) => r.json())
    .then((data) => {
      fetch(`http://localhost:3000/users/${activeUserID}`)
      .then((r) => r.json())
      .then((data) => setActiveUser(data))
    })
}

    return (
        <tr>
        <td><button onClick={handleDelete}>X</button></td>
        <td>{item}</td>
        <td>{inBag ? <button onClick={handlePacked}>Packed</button> : <button onClick={handlePacked}>Unpacked</button>}</td>
        </tr>
    )
}

export default ItemCard