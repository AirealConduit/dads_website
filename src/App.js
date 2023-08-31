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
          <br></br>
          <h1 className='header1'>Painter Professionals</h1>
          <a className="button" href="/contact" rel="noopener noreferrer">
              Click here to schedule!
            </a>

            <p className='about'>
            🎨 Expert Painting Services and Seamless Drywall Repair for a Transformed Home 🏠<br></br><br></br>

🛠️ Expertise: Our team of skilled professionals brings years of experience to every project, ensuring top-notch results.<br></br><br></br>

🔧 Versatility: We handle a wide range of services, saving you time and the hassle of dealing with multiple contractors.<br></br><br></br>

👷‍♂️ Reliability: Punctuality and professionalism are our hallmarks. You can count on us to get the job done right, on time, and within budget.<br></br><br></br>

🏡 Home Transformation: Our services enhance both the functionality and beauty of your home, adding value and comfort to your living space.<br></br><br></br>

🌱 Sustainability: We prioritize eco-friendly practices in our work, ensuring responsible waste disposal and energy-efficient solutions.<br></br><br></br>

📞 Customer Satisfaction: Your happiness is our ultimate goal. We listen to your needs, provide transparent communication, and exceed your expectations.<br></br>
            </p>
        </body>

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

/*<img src={topImage} className="App-logo" alt="logo" />*/