import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import Logo from './Logo'
import SunMoonToggle from './SunMoonToggle'

export default function Header({ logoActive, toggleLogoActive }) {
  const { pathname } = useLocation()
  console.log(pathname)

  const navList = useRef()
  const q = gsap.utils.selector(navList)

  useEffect(() => {
    if (pathname === '/') {
      gsap.from(q('.nav__list-item'), {
        opacity: 0,
        duration: 1,
        delay: 5,
        y: '-200px',
        stagger: 0.2
      })
    } else {
      gsap.from(q('.nav__list-item'), {
        opacity: 0,
        duration: 1,
        y: '-10px',
        stagger: 0.1
      })
    }
  }, [])

  const navLinks = (
    <nav className="nav">
      <ul className="nav__list" ref={navList}>
        <li className="nav__list-item">
          <Link to="/">
            <h2
              className={pathname === '/' ? 'nav__link underline' : 'nav__link'}
            >
              Home
            </h2>
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/portfolio">
            <h2
              className={
                pathname === '/portfolio' ? 'nav__link underline' : 'nav__link'
              }
            >
              Portfolio
            </h2>
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/about">
            <h2
              className={
                pathname === '/about' ? 'nav__link underline' : 'nav__link'
              }
            >
              About Me
            </h2>
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/contact">
            <h2
              className={
                pathname === '/contact' ? 'nav__link underline' : 'nav__link'
              }
            >
              Contact Me
            </h2>
          </Link>
        </li>
      </ul>
    </nav>
  )

  return (
    <header className="header">
      <Logo logoActive={logoActive} toggleLogoActive={toggleLogoActive} />
      <div className="header__right-div">
        {navLinks}
        <SunMoonToggle />
      </div>
    </header>
  )
}
