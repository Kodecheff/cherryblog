import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>General Health</li>
          <li><Link to="/food">Food</Link></li>
          <li>Fitness</li>
          <li>Lifestyle</li>
          <li>More</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;