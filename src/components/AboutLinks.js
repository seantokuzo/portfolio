import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutLinks() {
  return (
    <div className="about__section-links-div">
      <div className="about__subtitle-container">
        <h3 className="about__section-link section-subtitle">Portfolio</h3>
        <Link to="/portfolio">
          <i className="fa-solid fa-angles-left section__next home__next about__section-link-icon"></i>
        </Link>
      </div>
      <div className="about__subtitle-container">
        <h3 className="about__section-link section-subtitle">Contact</h3>
        <Link to="/contact">
          <i className="fa-solid fa-angles-right section__next home__next about__section-link-icon"></i>
        </Link>
      </div>
    </div>
  )
}
