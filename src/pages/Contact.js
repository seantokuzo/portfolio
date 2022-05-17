import React, { useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import dayBg from '../img/ctm/cb-day.png'
import nightBg from '../img/ctm/cb-night.png'

export default function Contact() {
  const { darkMode } = useContext(ThemeContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  console.log(name, email, message)

  const bgImg = darkMode ? nightBg : dayBg

  return (
    <section
      className="contact section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <form className="contact__form">
        <h3 className="section__subtitle contact__title">send me a message</h3>
        <label className="contact__form-label">
          name
          <input
            className="contact__input contact__form-el"
            onChange={(e) => setName(e.target.value)}
            type="text"
            max={40}
            min={1}
            placeholder="sean john johnsean"
            name="name"
            required
          />
        </label>
        <label className="contact__form-label">
          email
          <input
            className="contact__input contact__form-el"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="s_johnsean@whytho.com"
            name="email"
            required
          />
        </label>
        <label className="contact__form-label">
          message
          <textarea
            className="contact__text-area contact__form-el"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="just thought you should know, this portfolio stinks"
            name="message"
            min={10}
            max={400}
            required
          />
        </label>
        <button type="submit" className="contact__submit">
          send message
        </button>
      </form>
    </section>
  )
}
