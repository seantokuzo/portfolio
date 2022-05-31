import React from 'react'
import { buttonFactory } from '../utils/buttonFactory'

export default function AboutAudio() {
  const audio = (
    <div className="about__blurb" id="extended-about">
      <img
        className="about__blurb-img"
        src="https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/me/me-guitar600.png"
        alt="Sean playing guitar"
      />
      <div className="about__blurb-text-div">
        <h5 className="about__blurb-text section__text">
          Before learning to code, I worked as an audio engineer.
        </h5>
        <h5 className="about__blurb-text section__text">
          After working in a commercial studio for years, I started freelancing.
        </h5>
        <h5 className="about__blurb-text section__text">
          Over the last 6 years I've had the opportunity to work on a variety of
          projects, from music to voiceovers to film.
        </h5>
      </div>
      <div className="about__subpage-btn-div">
        {buttonFactory('dev')}
        {buttonFactory('caddy')}
      </div>
    </div>
  )

  return <>{audio}</>
}
