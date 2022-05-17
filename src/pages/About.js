import React, { useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

export default function About() {
  const { pathname } = useLocation()

  const buttonFactory = (text) => {
    return (
      <Link to={`/about/${text}`}>
        <div className="sample-btn-out">
          <div className="sample-btn-in">
            <p className="about__btn-text">{text.slice(0, 3)}</p>
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
    <div className="about__blurb-div about__starter-div">
      {buttonFactory('dev')}
      {buttonFactory('audio')}
      {buttonFactory('caddy')}
    </div>
  )

  return (
    <section className="about section">
      <h1 className="about__title section__title">About Me</h1>
      <nav className="about__nav">
        {aboutLinkFactory('dev')}
        {aboutLinkFactory('audio')}
        {aboutLinkFactory('caddy')}
      </nav>
      <Outlet />
      {pathname === '/about' && aboutStarter}
    </section>
  )
}

{/* <Link to="/about/dev">
  <h3
    className={
      pathname === '/about/dev'
        ? 'section__subtitle about__nav-link about__nav-link-active'
        : 'section__subtitle about__nav-link'
    }
  >
    dev
  </h3>
</Link>
<Link to="/about/audio">
  <h3
    className={
      pathname === '/about/audio'
        ? 'section__subtitle about__nav-link about__nav-link-active'
        : 'section__subtitle about__nav-link'
    }
  >
    audio
  </h3>
</Link>
<Link to="/about/caddy">
  <h3
    className={
      pathname === '/about/caddy'
        ? 'section__subtitle about__nav-link about__nav-link-active'
        : 'section__subtitle about__nav-link'
    }
  >
    caddy
  </h3>
</Link> */}
