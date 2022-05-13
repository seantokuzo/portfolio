import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)
import kuzoIcon from "../assets/img/luna/kuzo-nobck-hiRes.png"
// import ichiAudio from "../assets/audio/ichi-loop.wav"

export default function Logo() {
  // const ichiLoop = new Audio(ichiAudio)
  const logo = useRef()
  const q = gsap.utils.selector(logo)

  useEffect(() => {
    gsap.from(q(".header__logo"), {
      opacity: 0,
      duration: 1,
      y: "-20px",
    })
  })

  useEffect(() => {
    Draggable.create(".header__logo-div", {
      type: "rotation",
      cursor: "pointer",
    })
  })

  // function playAudioLoop() {
  //   ichiLoop.loop = true
  //   ichiLoop.play()
  // }

  return (
    <div className="header__logo-div" ref={logo}>
      <img
        src={kuzoIcon}
        alt="logo"
        className="header__logo"
        // onClick={playAudioLoop}
      ></img>
    </div>
  )
}
