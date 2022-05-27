import React, { useState, useEffect, useRef, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)
import kuzoDayIcon from '../../img/luna/kuzo-nobck-hiRes.png'
import kuzoNightIcon from '../../img/luna/kuzo-nobck-purp.png'

export default function Logo({ logoActive, toggleLogoActive }) {
  const { darkMode } = useContext(ThemeContext)
  const { pathname } = useLocation()
  const logo = useRef()
  const q = gsap.utils.selector(logo)

  useEffect(() => {
    gsap.from(q('.header__logo'), {
      opacity: 0,
      y: '-20px',
      duration: 1,
      delay: pathname === '/' ? 5 : 0
    })

    Draggable.create('.header__logo-div', {
      type: 'rotation'
    })
  }, [])

  const dynamicLogo = darkMode ? kuzoNightIcon : kuzoDayIcon

  return (
      <div
        className="header__logo-div"
        ref={logo}
        style={{ animation: logoActive ? 'spin 4s linear infinite' : '' }}
      >
        <img
          src={dynamicLogo}
          alt="logo"
          className="header__logo"
          onClick={toggleLogoActive}
        ></img>
      </div>
  )
}
