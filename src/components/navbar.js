import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/general_health">General health</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/fitness">Fitness</Link></li>
          <li><Link to="/lifestyle">Lifestyle</Link></li>
          <li>More</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;