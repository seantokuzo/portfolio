import React from 'react'
import meCaddy from '../../img/me/me-caddy.png'

export default function Audio() {
  const caddy = (
    <div className="about__blurb-div" id="extended-about">
      <img
        className="about__blurb-img"
        src={meCaddy}
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

  return <>{caddy}</>
}
