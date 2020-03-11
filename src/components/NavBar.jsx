import React from 'react'

export default function NavBar() {
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <a className="brand-logo">SainT'Times</a>
        <ul className='right'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
