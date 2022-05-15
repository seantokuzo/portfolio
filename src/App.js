import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import Header from './components/header/Header'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Particles from './components/Particles'

import './scss/main.scss'

export default function App() {
  const [logoActive, setLogoActive] = useState(false)

  // TURN MOUSE INTO SHADOW THING
  useEffect(() => {
    const ball = document.querySelector('.mouse')
    const pos = { x: window.innerWidth, y: window.innerHeight }
    const mouse = { x: pos.x, y: pos.y }
    const speed = 0.35

    const xSet = gsap.quickSetter(ball, 'x', 'px')
    const ySet = gsap.quickSetter(ball, 'y', 'px')

    window.addEventListener(
      'mousemove',
      (e) => {
        mouse.x = e.x - 25
        mouse.y = e.y - 25
      },
      []
    )

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      xSet(pos.x)
      ySet(pos.y)
    })
  }, [])

  function toggleLogoActive() {
    setLogoActive((prev) => !prev)
  }

  return (
    <div className="app">
      {logoActive && <Particles />}
      <div className="mouse"></div>
      <Header logoActive={logoActive} toggleLogoActive={toggleLogoActive} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
