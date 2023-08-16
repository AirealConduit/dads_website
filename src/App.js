import topImage from './images/HandyMan.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar.js'; 
import Services from './Services.js';
import About from './About';
import Contact from './Contact';

function Home() {
    return (
      <div className="App">
      <header className="App-header">
        
        </header>
        <body className="App-body">
          <p></p>
        <img src={topImage} className="App-logo" alt="logo" />
            <p className='color'>
              We can fix or setup anything you want!
            </p>
            <a
              className="App-link"
              href="/contact"
              rel="noopener noreferrer"
            >
              Click here to schedule
            </a>
        </body>
        <footer className="App-footer">
            <p>
              This is the FOOTER
            </p>
        </footer>
        </div>
    );
}



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
