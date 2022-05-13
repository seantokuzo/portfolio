import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)
import kuzoIcon from '../../assets/img/luna/kuzo-nobck-hiRes.png'
// import ichiAudio from "../assets/audio/ichi-loop.wav"

export default function Logo() {
  const [logoActive, setLogoActive] = useState(false)
  // const ichiLoop = new Audio(ichiAudio)
  const logo = useRef()

  useEffect(() => {
    Draggable.create('.header__logo-div', {
      type: 'rotation'
    })
  }, [])

  const toggleLogoActive = () => {
    setLogoActive((prev) => !prev)
  }

  return (
    <div className="header__logo-div" ref={logo}>
      <img
        src={kuzoIcon}
        alt="logo"
        className="header__logo"
        onClick={toggleLogoActive}
      ></img>
    </div>
  )
}
