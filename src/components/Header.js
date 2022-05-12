import React from "react"
import DraggableLogo from "./DraggableLogo"
import SunMoonToggle from "./SunMoonToggle"

export default function Header() {
  return (
    <header className="header">
      <DraggableLogo />
      <SunMoonToggle />
    </header>
  )
}
