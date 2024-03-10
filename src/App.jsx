import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <main className="App" style={{width:window.innerWidth, height:window.innerHeight}}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
