import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Contact from './components/ContactMe/Contact';
import NavBar from './components/NavBar/NavBar';
import MobileNav from './components/NavBar/MobileNav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './assets/stylesheets/App.css';

const App = () => (
  <Router>
    <NavBar />
    <MobileNav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  </Router>

);

export default App;
