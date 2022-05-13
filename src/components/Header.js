import React from "react"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import SunMoonToggle from "./SunMoonToggle"

export default function Header() {
  const navLinks = (
    <nav className="nav">
      <ul>
        <li className="nav__list-item">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  )

  return (
    <header className="header">
      <Logo />
      <div className="header__right-div">
        {navLinks}
        <SunMoonToggle />
      </div>
    </header>
  )
}
