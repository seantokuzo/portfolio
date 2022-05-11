import React, { useState } from "react"

export default function NavSidebar() {
  const [displayNav, setDisplayNav] = useState(false)
  // console.log(displayNav)

  function toggleNav() {
    setDisplayNav((prevDisplayNav) => !prevDisplayNav)
  }

  function closeNav() {
    setDisplayNav(false)
  }

  const navSideBar = (
    <div className={displayNav ? "nav nav-open" : "nav"}>
      <button
        className="nav__toggle"
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="nav__hamburger"></span>
      </button>
      <nav className="nav__navbar">
        <ul className="nav__navbar-list">
          <li className="nav__navbar-item" onClick={closeNav}>
            <a href="#top" className="nav__navbar-link">
              Home
            </a>
          </li>
          <li className="nav__navbar-item" onClick={closeNav}>
            <a href="#services" className="nav__navbar-link">
              My Services
            </a>
          </li>
          <li className="nav__navbar-item" onClick={closeNav}>
            <a href="#about" className="nav__navbar-link">
              About Me
            </a>
          </li>
          <li className="nav__navbar-item" onClick={closeNav}>
            <a href="#work" className="nav__navbar-link">
              My Work
            </a>
          </li>
          <li className="nav__navbar-item" onClick={closeNav}>
            <a href="#misc" className="nav__navbar-link">
              Misc
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )

  return <>{navSideBar}</>
}
