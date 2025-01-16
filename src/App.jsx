import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import React from 'react'
import Header from './component/layout/Header'
import Home from './Page/Home'
import EventPage from './Page/createEvent/EventPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <EventPage/>
    </>
  )
}

export default App
