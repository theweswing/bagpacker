import {useState} from "react"

function ItemCard({item,activeBag,setActiveBag}){

const [inBag,setInBag]=useState(false)

function handlePacked(e){
    setInBag(!inBag)
}

function handleDelete(e){
    const bagMinusDelete=[...activeBag].filter((givenItem) => {
        return (givenItem !==item)
    })
    setActiveBag(bagMinusDelete)
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