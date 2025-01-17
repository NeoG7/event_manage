import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import React from 'react'
import Header from './Header';
import EventPage from './Page/createEvent/EventPage'
import data from "./data.json";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div>
    
    
    <h1>Users List</h1>
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  </div>
  </div>

  )
}

export default App
