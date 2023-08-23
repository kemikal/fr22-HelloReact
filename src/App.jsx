import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import Button from './Button'
import User from './User'
import Greeting from './Greeting'
import Name from './Name'

function App() {

  const [score, setScore] = useState(0)
  const [online, setOnline] = useState(false)
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  const users = [
    {name: "Bengt", email: "bengan@mail.com", age: 67},
    {name: "Lisa", email: "lisa@gmail.se", age: 5},
    {name: "Herbert", email: "herbie@yahoo.nu", age: 99}
  ]

  const updateOnline = () => {
    setOnline(!online);
  }

  const updateScore = () => {
    setScore(score +1);
  }

  const updateUserName = (getUserName) => {
    setUserName(getUserName);
    localStorage.setItem("userName", getUserName);
  }

  return (
    
    <>
      <div>
        <h1>Hello React</h1>
        <Greeting online={online} updateOnline={updateOnline}/>
        <Name userName={userName}  updateUserName={updateUserName}/>
        <p>Du har klickat {score} gånger {userName}!</p>
        
        {users.map((user, i) => (
          <User name={user.name} email={user.email} age={user.age} key={i}/>
        ))}
      
        <Clock />
        <Button score={score} updateScore={updateScore}/>
      </div>
    </>
  )
}

export default App
