import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {


return (
<div className='topnav'>
        <a><Link to="/">Home</Link></a>
        
        <a><Link to="/services">Services</Link></a>
        <a><Link to="/contact">Contact</Link></a>
</div>

  );
}

export default Navbar;

// <a><Link to="/about">About</Link></a>