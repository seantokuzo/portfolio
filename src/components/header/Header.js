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

  // useEffect(() => {
  //   if (pathname === '/') {
  //     gsap.from(q('.nav__list-item'), {
  //       opacity: 0,
  //       duration: 1,
  //       delay: 5,
  //       y: '-200px',
  //       stagger: 0.2
  //     })
  //   } else {
  //     gsap.from(q('.nav__list-item'), {
  //       opacity: 0,
  //       duration: 1,
  //       y: '-10px',
  //       stagger: 0.1
  //     })
  //   }
  // }, [])

  const listLinkFactory = (path, label) => (
    <li className="nav__list-item">
      <Link to={path}>
        <h2
          className={
            '/' + pathname.split('/')[1] === path ? 'nav__link underline' : 'nav__link'
          }
        >
          {label}
        </h2>
      </Link>
    </li>
  )

  const navLinks = (
    <nav className="nav">
      <ul className="nav__list" ref={navList}>
        {listLinkFactory('/', 'Home')}
        {listLinkFactory('/portfolio', 'Portfolio')}
        {listLinkFactory('/about', 'About Me')}
        {listLinkFactory('/contact', 'Contact')}
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
