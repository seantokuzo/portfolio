import React, { useState, useContext, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { gsap } from 'gsap'
import dayBg from '../img/ctm/cb-day.png'
import nightBg from '../img/ctm/cb-night.png'

export default function Contact() {
  const { darkMode } = useContext(ThemeContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const { pathname } = useLocation()

  const contactEl = useRef()
  const q = gsap.utils.selector(contactEl)
  const tl = gsap.timeline()

  // useEffect(() => {
  //   if (pathname === '/contact') {
  //     tl.from(q('contact-anim'), {
  //       opacity: 0,
  //       y: -10,
  //       stagger: 2,
  //       ease: 'power1.in'
  //     })
  //   }
  // }, [pathname])

  const bgImg = darkMode ? nightBg : dayBg

  const contactForm = (
    <form
      className="contact__form contact-anim"
      action="https://formsubmit.co/me@seantokuzo.dev"
      method="POST"
    >
      <h3 className="section__subtitle contact__title contact-anim">
        send me a message
      </h3>
      <label className="contact__form-label contact-anim">
        name
        <input
          className="contact__input contact__form-el"
          onChange={(e) => setName(e.target.value)}
          type="text"
          max={40}
          min={1}
          placeholder="bart simpson"
          name="name"
          required
        />
      </label>
      <label className="contact__form-label contact-anim">
        email
        <input
          className="contact__input contact__form-el"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="bart@simpson.com"
          name="email"
          required
        />
      </label>
      <label className="contact__form-label contact-anim">
        message
        <textarea
          className="contact__text-area contact__form-el"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="this portfolio stinks"
          name="message"
          minLength={10}
          maxLength={400}
          required
        />
      </label>
      <button type="submit" className="contact__submit contact-anim">
        send message
      </button>
      <input
        type="hidden"
        name="_next"
        value="https://seantokuzo.dev/contact/thankyou"
      ></input>
    </form>
  )

  return (
    <section
      className="contact section"
      style={{ backgroundImage: `url(${bgImg})` }}
      ref={contactEl}
    >
      {pathname === '/contact' && contactForm}
      <Outlet name={name} />
    </section>
  )
}
