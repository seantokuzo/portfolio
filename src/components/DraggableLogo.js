import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)
import kuzoIcon from "../img/luna/kuzo-nobck-hiRes.png"

export default function DraggableLogo() {
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
    // const dragLogo = document.querySelector(".logo-ball")
    Draggable.create(".logo-ball", {
      type: "x,y",
      bounds: document.querySelector(".header"),
      inertia: true,
      cursor: "pointer",
    })
  })

  return (
    <div className="logo-ball" ref={logo}>
      <img src={kuzoIcon} alt="logo" className="header__logo"></img>
    </div>
  )
}
