import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import MyToolbox from '../components/MyToolbox'
import meHiking from '../img/me/me-hiking.jpg'
import meGuitar from '../img/me/me-guitar.png'

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
          I'm Sean, web developer from Los Angeles, California.
        </h5>
        <h5 className="about__blurb-text section__text">
          I love developing web apps with React and styling with Sass.
        </h5>
        <h5 className="about__blurb-text section__text">
          My new obsession is building and testing APIs with Node, MongoDB and
          Postman.
        </h5>
        <h5 className="about__blurb-text section__text">
          Currently learning Next.js.
        </h5>
      </div>
    </div>
  )

  const extendedAbout = (
    <div className="about__blurb-div" id="extended-about">
      <img
        className="about__blurb-img"
        src={meGuitar}
        alt="Sean hiking in Hawai'i"
      />
      <div className="about__blurb-text-div">
        <h5 className="about__blurb-text section__text">
          Before teaching myself to code I worked as an audio engineer.
        </h5>
        <h5 className="about__blurb-text section__text">
          After working in a large commercial studio for years, I started
          freelancing.
        </h5>
        <h5 className="about__blurb-text section__text">
          Over the last 6 years I've had the opportunity to work on a variety of
          projects, from music to voiceovers to film.
        </h5>
      </div>
    </div>
  )

  const aboutLinks = (
    <div className="about__links-div">
      {/* <div className="about__subtitle-container">
        <h3 className="about__subtitle section-subtitle">More me</h3>
        <a href="#extended-about">
          <i className="fa-solid fa-angles-down section__next home__next"></i>
        </a>
      </div> */}
      <div className="about__subtitle-container">
        <h3 className="about__subtitle section-subtitle">Contact Me</h3>
        <Link to="/contact">
          <i className="fa-solid fa-angles-right section__next home__next"></i>
        </Link>
      </div>
    </div>
  )

  return (
    <section className="about section">
      {blurb}
      <MyToolbox />
      {aboutLinks}
      {extendedAbout}
    </section>
  )
}
