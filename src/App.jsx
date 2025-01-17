import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import React from 'react'
import Header from './component/layout/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex   items-center w-full bg-black fixed z-10 py-[10px]'>
      <Header/>
    </div>
  )
}

export default App
