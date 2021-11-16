import {useState} from "react"

function AddItemForm({activeBag,activeUser,activeBagName,setActiveBag}){
    const [newItem,setNewItem]=useState("")

    function handleChange(e){
        setNewItem(e.target.value)
        console.log(newItem)
    }

    function handleSubmit(e){
        e.preventDefault()
        setActiveBag([...activeBag,newItem])
        console.log(activeBag)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Add New Item"></input>
                <button type="submit">Add To Bag</button>
            </form>
        </div>
    )
}

export default AddItemForm