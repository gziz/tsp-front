import React from 'react'
import {Link} from "react-router-dom"

// Navbar.js
export default function Navbar() {
    return (
      <nav>

        <ul className='nav-links'>

          <Link to="/" className='nav-link'>
            <b>TSP</b>
          </Link>

          <Link to="/" className='nav-link'>
            <b>Create Route</b>
          </Link>

          </ul>
      </nav>
    );
  }