import {useState} from "react"

function BagCard({item}){

const [inBag,setInBag]=useState(false)

function handlePacked(e){
    setInBag(!inBag)
}

    return (
        <tr>
        <td><button>X</button></td>
        <td>{item}</td>
        <td>{inBag ? <button onClick={handlePacked}>Packed</button> : <button onClick={handlePacked}>Unpacked</button>}</td>
        </tr>
    )
}

export default BagCard