import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import dayBg from '../assets/img/ctm/cb-day.png'
import nightBg from '../assets/img/ctm/cb-night.png'

export default function Contact() {
  const { darkMode } = useContext(ThemeContext)

  const bgImg = darkMode ? nightBg : dayBg

  return (
    <section
      className="contact section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="section__title contact__title">
        Hello there, I'm <strong>Sean</strong>
      </h1>
      <h1 className="section__title contact__title">
        Web Developer guy from California
      </h1>
    </section>
  )
}
