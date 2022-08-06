import React from 'react'
import {Link} from "react-router-dom"

// Navbar.js
export default function Navbar() {
    return (
      <nav>

        <ul className='nav-links'>

          {/* <Link to="/" className='nav-link'>
            <b>Home</b>
          </Link> */}

          <Link to="/" className='nav-link'>
            <b>Crear Ruta</b>
          </Link>

          </ul>
      </nav>
    );
  }