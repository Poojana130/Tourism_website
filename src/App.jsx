// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './components/Home Page/HomePage'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (

  <Router>
      <Navbar/>
    <Routes path='/' element ={<HomePage/>}/>
  </Router>
  )
}

export default App
