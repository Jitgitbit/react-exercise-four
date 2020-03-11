import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <a className="brand-logo">SainT'Times</a>
        <ul className='right'>
          {/* <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li> */}
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li> 
        </ul>
      </div>
    </nav>
  )
}
