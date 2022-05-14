import React, { useState } from 'react'

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
    <div className={displayNav ? 'nav-div nav-open' : 'nav-div'}>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item" onClick={closeNav}>
            <a href="#top" className="navbar__link">
              Home
            </a>
          </li>
          <li className="navbar__item" onClick={closeNav}>
            <a href="#services" className="navbar__link">
              My Services
            </a>
          </li>
          <li className="navbar__item" onClick={closeNav}>
            <a href="#about" className="navbar__link">
              About Me
            </a>
          </li>
          <li className="navbar__item" onClick={closeNav}>
            <a href="#work" className="navbar__link">
              My Work
            </a>
          </li>
          <li className="navbar__item" onClick={closeNav}>
            <a href="#misc" className="navbar__link">
              Misc
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )

  return <>{navSideBar}</>
}
