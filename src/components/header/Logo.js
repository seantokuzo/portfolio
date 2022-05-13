import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)
import kuzoIcon from '../../assets/img/luna/kuzo-nobck-hiRes.png'
import ichiAudio from '../../assets/audio/ichi-loop.m4a'

export default function Logo() {
  const [logoActive, setLogoActive] = useState(false)
  console.log(logoActive)
  const logo = useRef()

  useEffect(() => {
    Draggable.create('.header__logo-div', {
      type: 'rotation'
    })
  }, [])

  useEffect(() => {
    const audioEl = document.getElementById('bg-audio')

    if (logoActive) {
      audioEl.play()
      return
    }
    audioEl.pause()
  }, [logoActive])

  function toggleLogoActive() {
    setLogoActive((prev) => !prev)
  }

  return (
    <div
      className="header__logo-div"
      ref={logo}
      style={{ animation: logoActive ? 'spin 4s linear infinite' : '' }}
    >
      <audio src={ichiAudio} loop={true} id="bg-audio" />
      <img
        src={kuzoIcon}
        alt="logo"
        className="header__logo"
        onClick={toggleLogoActive}
      ></img>
    </div>
  )
}

// GSAP FLICKER ANIMATION - HOW TO STOP TL STATE CHANGE THO?
// const line = document.createElement('div')
// line.className = 'line'
// logoDiv.appendChild(line)

// const tl = gsap.timeline({ repeat: -1 })

// for (let i = 50; i--; ) {
//   tl.to(logoEl, R(0.03, 0.17), { opacity: R(0.2, 1) })
// }

// tl.to(
//   line,
//   tl.duration() / 2,
//   {
//     opacity: R(0.1, 1),
//     repeat: 1,
//     yoyo: true
//   },
//   0
// )
// function R(max, min) {
//   return Math.random() * (max - min) + min
// }
