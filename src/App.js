import React from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import FunCorner from './pages/fun-corner';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Aurora from './components/Aurora';
import Nav from './components/Nav';


function App() {
  return (
    <Router>
      <Aurora />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fun-corner" element={<FunCorner />} />
      </Routes>
    </Router>
  )
}

export default App;
