import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import Logo from "./Logo"
import SunMoonToggle from "./SunMoonToggle"

export default function Header() {
  const navList = useRef()
  const q = gsap.utils.selector(navList)

  useEffect(() => {
    gsap.from(q(".nav__list-item"), {
      opacity: 0,
      duration: 1,
      y: "-200px",
      stagger: 0.2,
    })
  }, [])

  const navLinks = (
    <nav className="nav">
      <ul className="nav__list" ref={navList}>
        <li className="nav__list-item">
          <Link to="/">
            <h2 className="nav__link">Home</h2>
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/about">
            <h2 className="nav__link">About Me</h2>
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/portfolio">
            <h2 className="nav__link">Portfolio</h2>
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/contact">
            <h2 className="nav__link">Contact Me</h2>
          </Link>
        </li>
        <li className="nav__list-item">
          <SunMoonToggle />
        </li>
      </ul>
    </nav>
  )

  return (
    <header className="header">
      <Logo />
      <div className="header__right-div">
        {navLinks}
        {/* <SunMoonToggle /> */}
      </div>
    </header>
  )
}
