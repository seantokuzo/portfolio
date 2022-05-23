import React, { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { buttonFactory } from '../utils/factoryFunctions'

export default function About() {
  const { pathname } = useLocation()
  console.log(pathname)
  const about = useRef()
  const q = gsap.utils.selector(about)
  const tl = gsap.timeline()

  useEffect(() => {
    if (pathname === '/about') {
      tl.from(q('.about--initial'), {
        opacity: 0,
        duration: 0.15,
        delay: -1
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
    } else {
      tl.from(q('.about__blurb-img'), {
        opacity: 0,
        y: -10,
        scale: 0.75,
        duration: 0.75
      })
      tl.from(q('.about__blurb-text'), {
        opacity: 0,
        y: -20,
        delay: -0.5,
        stagger: 0.15
      })
      if (pathname === '/about/dev') {
        tl.from(q('.section__title-toolbox'), {
          opacity: 0,
          y: -10,
          duration: 0.25
        })
        tl.from(q('.stack-icon-link'), {
          opacity: 0,
          y: 10,
          delay: -0.25,
          stagger: 0.1
        })
      }
      tl.from(q('.sample-btn-out'), {
        opacity: 0,
        y: -50,
        ease: 'bounce.out',
        stagger: 0.25,
        delay: pathname === '/about/dev' ? -1 : -0.25
      })
    }
  }, [pathname])

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
        Pick a button, any button
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
