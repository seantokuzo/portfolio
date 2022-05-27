import React from 'react'
import MyToolbox from '../components/MyToolbox'
import { buttonFactory } from '../utils/buttonFactory'
import meHiking from '../img/me/me-hiking.jpg'

export default function AboutDev() {
  const dev = (
    <div className="about__blurb">
      <img
        className="about__blurb-img"
        src={meHiking}
        alt="Sean hiking in Hawai'i"
      />
      <div className="about__blurb-text-div">
        <h5 className="about__blurb-text section__text">
          I'm Sean, web developer from San Diego, California.
        </h5>
        <h5 className="about__blurb-text section__text">
          I love developing web apps with React and styling with Sass.
        </h5>
        <h5 className="about__blurb-text section__text">
          My latest obsession is building and testing APIs with Node, Express, MongoDB
          and Postman.
        </h5>
        <h5 className="about__blurb-text section__text">
          Currently learning Next.js.
        </h5>
      </div>
      <MyToolbox />
      <div className="about__subpage-btn-div">
        {buttonFactory('audio')}
        {buttonFactory('caddy')}
      </div>
    </div>
  )

  return <>{dev}</>
}
