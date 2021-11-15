import {useState} from "react"

function Welcome({setCurrentBag,currentBag,activeItemsBagOne,setActiveItemsBagOne,activeItemsBagTwo,setActiveItemsBagTwo,activeItemsBagThree,setActiveItemsBagThree,activeItemsBagFour,setActiveItemsBagFour,allItemsDaily,setAllItemsDaily,activeItemsDaily,setActiveItemsDaily,allItemsBagOne,setAllItemsBagOne,allItemsBagTwo,setAllItemsBagTwo,allItemsBagThree,setAllItemsBagThree,allItemsBagFour,setAllItemsBagFour,userLoggedIn,setUserLoggedIn}){

const [userState,setUserState]=useState({
    name:"",
    email:""
})
const[newUser,setNewUser]=useState(true)

function handleReturningUser(e){
  setNewUser(!newUser)
}

let userinDB=false


function handleChange(e){
    setUserState({...userState,[e.target.name]:e.target.value})
    console.log(userState)
    }

function handleLogin(e){
  e.preventDefault()
  fetch('http://localhost:3000/users')
    .then((r) => r.json())
    .then((data) => {
        const userBase=[...data]
        let counter=0
        for (const user of userBase){
            if (user.email.toLowerCase().includes(userState.email.toLowerCase())){
                alert(`Welcome back, ${user.name}!`)
                counter=counter+1
                setUserLoggedIn(user.id)
    fetch(`http://localhost:3000/users/${user.id}`)
    .then((r) => r.json())
    .then((data) => console.log(data))
    fetch(`http://localhost:3000/dailies/${user.id}`)
    .then((r) => r.json())
    .then((data) => {
      setAllItemsDaily(data)
      setActiveItemsDaily(data)
      setCurrentBag(data)
    })
    fetch(`http://localhost:3000/addBagOne/${user.id}`)
    .then((r) => r.json())
    .then((data) => {
      setAllItemsBagOne(data)
      setActiveItemsBagOne(data)

    })
    fetch(`http://localhost:3000/addBagTwo/${user.id}`)
    .then((r) => r.json())
    .then((data) => {
      setAllItemsBagTwo(data)
      setActiveItemsBagTwo(data)

    })
    fetch(`http://localhost:3000/addBagThree/${user.id}`)
    .then((r) => r.json())
    .then((data) => {
      setAllItemsBagThree(data)
      setActiveItemsBagThree(data)

    })
    fetch(`http://localhost:3000/addBagFour/${user.id}`)
    .then((r) => r.json())
    .then((data) => {
      setAllItemsBagFour(data)
      setActiveItemsBagFour(data)

    })
            }
        }
        if (counter===0){
          alert("Email not found! Please sign up and try again!")
        }
        e.target.reset()
})}

function handleSignUp(e){
    e.preventDefault()
    fetch('http://localhost:3000/users')
    .then((r) => r.json())
    .then((data) => {
        const userBase=[...data]
        console.log(userBase)
        for (const user of userBase){
            if (user.email.toLowerCase().includes(userState.email.toLowerCase())){
                alert("You already have an account! Log In To Continue")
                userinDB=true
            }
        }
        if (userinDB===false){
            fetch('http://localhost:3000/users',{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                  },
                  body: JSON.stringify(userState)})
              .then((r) => r.json())
              .then((data) => {
                  alert("Welcome to Bagpacker! Your information is in no way secure. Log In to Continue")
                })
                fetch('http://localhost:3000/dailies',{
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                      },
                      body: JSON.stringify({
                        "email":userState.email,
                        "item1": "",
                        "item2": "",
                        "item3": ""
                        })})
                  .then((r) => r.json())
                  .then((data) => {
                    })
                    fetch('http://localhost:3000/addBagOne',{
                        method: "POST",
                        headers: {
                            "Content-Type" : "application/json"
                          },
                          body: JSON.stringify({
                            "email":userState.email,
                            "bagname": "",
                            "item1": "",
                            "item2": "",
                            "item3": ""
                            })})
                      .then((r) => r.json())
                      .then((data) => {
                        })
                        fetch('http://localhost:3000/addBagTwo',{
                        method: "POST",
                        headers: {
                            "Content-Type" : "application/json"
                          },
                          body: JSON.stringify({
                            "email":userState.email,
                            "bagname": "",
                            "item1": "",
                            "item2": "",
                            "item3": ""
                            })})
                      .then((r) => r.json())
                      .then((data) => {
                        })
                        fetch('http://localhost:3000/addBagThree',{
                            method: "POST",
                            headers: {
                                "Content-Type" : "application/json"
                              },
                              body: JSON.stringify({
                                "email":userState.email,
                                "bagname": "",
                                "item1": "",
                                "item2": "",
                                "item3": ""
                                })})
                          .then((r) => r.json())
                          .then((data) => {
                            })
                            fetch('http://localhost:3000/addBagFour',{
                        method: "POST",
                        headers: {
                            "Content-Type" : "application/json"
                          },
                          body: JSON.stringify({
                            "email":userState.email,
                            "bagname": "",
                            "item1": "",
                            "item2": "",
                            "item3": ""
                            })})
                      .then((r) => r.json())
                      .then((data) => {
                        })
                        
        }
    })
    e.target.reset()
  }

    return (
<div>
      <h2>Welcome to Bagpacker!</h2>
      <p>Going to work? Going on vacation? Make sure you have everything with Bagpacker!</p>
      
      {newUser ? 
      <div>
        <h3>New To Bagpacker?</h3>
      <p>Enter Your Name and Email to get started!</p>
      <form onSubmit={handleSignUp}>
        <label>Name: </label>
        <input onChange={handleChange} type="text" name="name"></input><br></br><br></br>
        <label>Email: </label>
        <input onChange={handleChange} type="email" name="email"></input><br></br><br></br>
        <button type="submit">Sign Up!</button> 
      </form> 
      <button onClick={handleReturningUser}>I Already Have An Account</button></div> : 
      <div>
        <h3>Returning to Bagpacker?</h3>
        <p>Enter your Name and Email to Retrieve your Bags!</p>
      <form onSubmit={handleLogin}>
        <label>Name: </label>
        <input onChange={handleChange} type="text" name="name"></input><br></br><br></br>
        <label>Email: </label>
        <input onChange={handleChange} type="email" name="email"></input><br></br><br></br>
        <button type="submit">Log In!</button>
      </form> 
      <button onClick={handleReturningUser}>Wait, I don't have an account actually</button></div>
       }<br></br>
     
    </div>
    )

    }
export default Welcome