// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Home Page/HomePage';
import Footer from './components/Footer/Footer';
import StatesofIndia from './components/statesofIndia/statesofIndia';

function App() {
  

  return (

  <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/statesofIndia' element={<StatesofIndia/>}/>
      </Routes>
      <Footer/>
   
  </Router>
  )
}

export default App
