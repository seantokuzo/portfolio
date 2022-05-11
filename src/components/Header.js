import React from "react"
import NavSidebar from "./NavSidebar.js"
import HeaderTitle from "./HeaderTitle.js"
import cjIcon from "../img/luna/derp.png"

export default function Header() {
  return (
    <header className="header">
      <img src={cjIcon} alt="logo" className="header__logo"></img>
      <HeaderTitle />
      <NavSidebar />
    </header>
  )
}
