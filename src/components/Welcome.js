import {useState} from "react"

function Welcome(){
const [userState,setUserState]=useState({
    name:"",
    email:""
})
let userinDB=false


function handleChange(e){
    setUserState({...userState,[e.target.name]:e.target.value})
    console.log(userState)
    }

function handleSignUp(e){
    e.preventDefault()
    fetch('http://localhost:3000/users')
    .then((r) => r.json())
    .then((data) => {
        const userBase=[...data]
        console.log(userBase)
        for (const user of userBase){
            if (user.email.toLowerCase().includes(userState.email.toLowerCase())){
                alert("You already have an account!")
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
                  console.log(data)
                  alert("Welcome to Bagpacker! Your information is in no way secure.")
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
                      console.log(data)
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
                          console.log(data)
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
                          console.log(data)
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
                              console.log(data)
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
                          console.log(data)
                        })
              e.target.reset()
            }
        })
    }

    return (
<div>
      <h2>Welcome to Bagpacker!</h2>
      <p>Going to work? Going on vacation? Make sure you have everything with Bagpacker!</p>
      <h3>New To Bagpacker?</h3>
      <p>Enter Your Name and Email to get started!</p>
      <form onSubmit={handleSignUp}>
        <label>Name: </label>
        <input onChange={handleChange} type="text" name="name"></input><br></br><br></br>
        <label>Email: </label>
        <input onChange={handleChange} type="email" name="email"></input><br></br><br></br>
        <button type="submit">Sign Up!</button>
      </form><br></br>
      <h3>Returning to Bagpacker?</h3>
      <form>
        <label>Name: </label>
        <input onChange={handleChange} type="text" name="name"></input><br></br><br></br>
        <label>Email: </label>
        <input onChange={handleChange} type="email" name="email"></input><br></br><br></br>
        <button type="submit">Log In!</button>
      </form>
    </div>
    )
}

export default Welcome