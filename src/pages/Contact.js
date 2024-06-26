import React, { useState, useEffect, useRef } from 'react'
// import React, { useState, useContext, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// import { ThemeContext } from '../context/ThemeContext'
import { gsap } from 'gsap'

export default function Contact() {
  // const { darkMode } = useContext(ThemeContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const { pathname } = useLocation()

  const contactRef = useRef()
  const q = gsap.utils.selector(contactRef)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.contact-anim'), {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      ease: 'bounce.out',
    })
  }, [])

  // const bgImg = darkMode ? nightBg : dayBg
  const bgImg =
    'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/contact-img/cb_night-1024.png'
  // const bgImg = darkMode
  //   ? 'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/contact-img/cb_night-1024.png'
  //   : 'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/contact-img/cb_day-1024.png'

  const contactForm = (
    <form
      className="contact__form contact-anim"
      name="contact"
      method="POST"
      // action="https://formsubmit.co/38042c1553ef5f2587e7306e98faf815"
      // GMAIL nahhh
      action="https://formsubmit.co/2fa702bb7180b1de86a943b3b462dc5a"
    >
      <h3 className="section__subtitle contact__title contact-anim">
        SEND ME A MESSAGE
      </h3>
      <label className="contact__form-label contact-anim">
        name
        <input
          className="contact__input contact__form-el contact-anim"
          onChange={(e) => setName(e.target.value)}
          type="text"
          max={40}
          min={1}
          name="name"
          required
        />
      </label>
      <label className="contact__form-label contact-anim">
        email
        <input
          className="contact__input contact__form-el contact-anim"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
        />
      </label>
      <label className="contact__form-label contact-anim">
        message
        <textarea
          className="contact__text-area contact__form-el contact-anim"
          onChange={(e) => setMessage(e.target.value)}
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
      ref={contactRef}
    >
      {pathname === '/contact' && contactForm}
      <Outlet />
    </section>
  )
}
