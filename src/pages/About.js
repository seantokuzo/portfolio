import React, { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

export default function About() {
  const { pathname } = useLocation()
  const about = useRef()
  const q = gsap.utils.selector(about)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(q('.about--initial'), {
      opacity: 0,
      ease: 'power2.out',
      duration: .5
    })
    tl.from(q('.sample-btn-out'), {
      opacity: 0,
      y: -100,
      ease: 'bounce.out',
      stagger: 0.5
    })
    tl.from(q('.about__starter-title'), {
      opacity: 0,
      y: -50
    })
  }, [])

  const buttonFactory = (text) => {
    return (
      <Link to={`/about/${text}`}>
        <div className={`sample-btn-out`}>
          <div className="sample-btn-in">
            <p className="about__btn-text">{text.slice(0, 1)}</p>
          </div>
        </div>
      </Link>
    )
  }

  const aboutLinkFactory = (subPath) => (
    <Link to={`/about/${subPath}`}>
      <h3
        className={
          pathname === `/about/${subPath}`
            ? 'section__subtitle about__nav-link about__nav-link-active'
            : 'section__subtitle about__nav-link'
        }
      >
        {subPath}
      </h3>
    </Link>
  )

  const aboutStarter = (
    <div className="about__blurb-div about__starter-div about--initial">
      <h3 className="section__subtitle about__starter-title">
        Dont press the buttons!!!
      </h3>
      <div className="about__starter-btn-div">
        {buttonFactory('dev')}
        {buttonFactory('audio')}
        {buttonFactory('caddy')}
      </div>
    </div>
  )

  return (
    <section className="about section" ref={about}>
      <Link to="/about">
        <h1 className="about__title section__title about--initial">About Me</h1>
      </Link>
      <nav className="about__nav about--initial">
        {aboutLinkFactory('dev')}
        {aboutLinkFactory('audio')}
        {aboutLinkFactory('caddy')}
      </nav>
      <Outlet />
      {pathname === '/about' && aboutStarter}
    </section>
  )
}
