import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-blue-600">
      <h1 className="text-5xl font-bold text-white">Hello, Vite + Tailwind CSS!</h1>
    </div>
  )
}

export default App
