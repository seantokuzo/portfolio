import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)

export default function SunMoonToggle() {
  const [isDay, setIsDay] = useState(false)

  const toggleBtn = useRef()
  const q = gsap.utils.selector(toggleBtn)

  useEffect(() => {
    gsap.from(q(".toggle-btn"), {
      opacity: 0,
      duration: 1,
      y: "-20px",
    })

    // const dragLogo = document.querySelector(".logo-ball")
    Draggable.create(".toggle-btn", {
      type: "x,y",
      bounds: document.querySelector(".header"),
      inertia: true,
      cursor: "pointer",
    })
  }, [])

  function toggleIsDay() {
    setIsDay((prevIsDay) => !prevIsDay)
  }

  const toggleButton = (
    <button className="toggle-btn" aria-label="toggle" onClick={toggleIsDay}>
      {/* <span className="box-and-balls"></span> */}
      <i className="fa-solid fa-moon toggle-moon toggle-icon"></i>
      <i className="fa-solid fa-sun toggle-sun toggle-icon"></i>
    </button>
  )

  return (
    <div className={!isDay ? "toggle toggle-on" : "toggle"} ref={toggleBtn}>
      {toggleButton}
    </div>
  )
}
