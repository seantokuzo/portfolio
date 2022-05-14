import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import MyToolbox from '../components/MyToolbox'
import meHiking from '../assets/img/me/me-hiking.jpg'

export default function About() {
  const blurb = (
    <div className="about__blurb-div">
      <img
        className="about__blurb-img"
        src={meHiking}
        alt="Sean hiking in Hawai'i"
      />
      <div className="about__blurb-text-div">
        <h5 className="about__blurb-text section__text">
          I'm Sean, self taught web developer from Los Angeles, California.
        </h5>
        <h5 className="about__blurb-text section__text">
          I love developing with React, styling with Sass and my new obsession
          is building and testing APIs with Node, MongoDB and Postman. Currently
          learning Next.js.
        </h5>
      </div>
    </div>
  )

  const extendedAbout = (
    <div className="about__blurb-div" id="extended-about">
      <img
        className="about__blurb-img"
        src={meHiking}
        alt="Sean hiking in Hawai'i"
      />
      <div className="about__blurb-text-div">
        <h5 className="about__blurb-text section__text">
          I'm Sean, a self taught web developer from Los Angeles, California.
          Before teaching myself to code (and before the 'rona) I was an audio
          engineer and golf caddy for my dad on the PGA Champions Tour.
        </h5>
        <h5 className="about__blurb-text section__text">
          I love developing with React, styling with Sass and my new obsession
          is building and testing APIs with Node, MongoDB and Postman. Currently
          learning Next.js.
        </h5>
      </div>
    </div>
  )

  const aboutLinks = (
    <div className="about__links-div">
      <div className="about__subtitle-container">
        <h3 className="about__subtitle section-subtitle">More me</h3>
        <a href="#extended-about">
          <i className="fa-solid fa-angles-down section__next home__next"></i>
        </a>
      </div>
      <div className="about__subtitle-container">
        <h3 className="about__subtitle section-subtitle">My work</h3>
        <Link to="/portfolio">
          <i className="fa-solid fa-angles-right section__next home__next"></i>
        </Link>
      </div>
    </div>
  )

  return (
    <section className="about section">
      {blurb}
      {aboutLinks}
      <MyToolbox />
      {extendedAbout}
    </section>
  )
}
