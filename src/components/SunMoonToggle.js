import React from "react"

export default function SunMoonToggle(props) {
  const toggleButton = (
    <button
      className="toggle-btn"
      aria-label="toggle"
      onClick={props.toggleIsDay}
    >
      {/* <span className="box-and-balls"></span> */}
      <i className="fa-solid fa-moon toggle-moon toggle-icon"></i>
      <i className="fa-solid fa-sun toggle-sun toggle-icon"></i>
    </button>
  )
  return (
    <div className={!props.isDay ? "toggle toggle-on" : "toggle"}>
      {toggleButton}
    </div>
  )
}
