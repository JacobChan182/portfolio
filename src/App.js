import React, { useEffect } from 'react';
import Home from './pages/home';
import Contact from './components/portfolioHome/contact';
import FunCorner from './pages/fun-corner';
import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Aurora from './components/Aurora';
import Nav from './components/Nav';
import SmoothScroll from './components/SmoothScroll';
import { trackPageView } from './analytics';

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname || '/';
    trackPageView(path, document.title);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <SmoothScroll>
        <Aurora />
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fun-corner" element={<FunCorner />} />
        </Routes>
      </SmoothScroll>
    </Router>
  )
}

export default App;
