import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <main className="App" style={{width:window.innerWidth, height:window.innerHeight}}>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
