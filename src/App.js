import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import './App.css';
//components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import NavBar from './components/NavBar';



function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/project' element={<Project />} />
          
      </Routes>
      
    </Router>
  );
}

export default App;
