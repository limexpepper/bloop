import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      <link to="/" className="logo">Bloopy</link>
      <ul>
        <li className="active">
          <Link to="/about">About Bloopy</Link>
        </li>
        <li>
          <Link to="/how-it-works">How it works</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav