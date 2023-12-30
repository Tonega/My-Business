import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Works from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
