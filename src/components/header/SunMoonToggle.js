import React, { useEffect, useRef, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)

export default function SunMoonToggle() {
  const { pathname } = useLocation()
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  const toggleBtn = useRef()
  const q = gsap.utils.selector(toggleBtn)

  useEffect(() => {
    if (pathname === '/') {
      gsap.from(q('.toggle-btn'), {
        opacity: 0,
        duration: 1,
        delay: 6.75,
        y: '-100px'
      })
    } else {
      gsap.from(q('.toggle-btn'), {
        y: '-10px',
        opacity: 0,
        duration: 1,
        delay: 0.5
      })
    }
    // Draggable.create('.toggle-btn', {
    //   type: 'x,y',
    //   bounds: document.querySelector('.header'),
    //   inertia: true
    // })
  }, [])

  const toggleButton = (
    <button className="toggle-btn" aria-label="toggle" onClick={toggleTheme}>
      {/* <span className="box-and-balls"></span> */}
      <i className="fa-solid fa-moon toggle-moon toggle-icon"></i>
      <i className="fa-solid fa-sun toggle-sun toggle-icon"></i>
    </button>
  )

  return (
    <div className={darkMode ? 'toggle toggle-on' : 'toggle'} ref={toggleBtn}>
      {toggleButton}
    </div>
  )
}
