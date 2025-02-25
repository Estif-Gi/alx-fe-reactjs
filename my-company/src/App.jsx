import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as
        Router,
        Routes,
        Route,
        Link
 } from 'react-router-dom'
 import Home from './pages/Home'
 import About from './pages/About'
 import Services from './pages/Services'
 import Contact from './pages/Contact'
 import Navbar from './pages/Navbar'
function App() {
  

  return (
    <div>

    <Router>
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App
