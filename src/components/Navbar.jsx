import React from 'react'
import {Link} from "react-router-dom"

// Navbar.js
export default function Navbar() {
    return (
      <nav>

        <ul className='nav-links'>

          <Link to="/" className='nav-link'>
            Home
          </Link>

          <Link to="/create_route" className='nav-link'>
            Crear Ruta
          </Link>

          </ul>
      </nav>
    );
  }