import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation()
  const footerRef = useRef()
  const q = gsap.utils.selector(footerRef)

  useEffect(() => {
    if (pathname === '/') {
      gsap.from(q('.footie-anim'), {
        opacity: 0,
        y: 20,
        duration: 2,
        ease: 'power4.out',
        delay: 7
      })
    }
  }, [])

  return (
    <footer className="footer" ref={footerRef}>
      <p className="footer__text section__text footie-anim">
        <span className="footer__copy">©</span> seantokuzo 2022
      </p>
      <div className="footer__links footie-anim">
        <a
          href="https://www.linkedin.com/in/sean-tokuzo/"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin footer__link-icon"></i>
        </a>
        <a
          href="https://github.com/seantokuzo"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github footer__link-icon"></i>
        </a>
        {/* <a
          href="https://codepen.io/seantokuzo"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-codepen footer__link-icon"></i>
        </a> */}
      </div>
    </footer>
  )
}
