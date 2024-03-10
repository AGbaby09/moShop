import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Modal from './components/Modal/Modal'
import ContextVariales from './context/ContextVariables'

function App() {
  const {view} = useContext(ContextVariales)

  return (
    <BrowserRouter>
        <main className="App" style={{width:window.innerWidth, height:window.innerHeight}}>
          <Navbar />
          {view && <Modal />}
          <Routes>
            <Route path='/' element={<Hero />} />
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
