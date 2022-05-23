import React from 'react'
import { buttonFactory } from '../utils/buttonFactory'
import meCaddy from '../img/me/me-caddy.png'

export default function AboutCaddy() {
  const caddy = (
    <div className="about__blurb-div" id="extended-about">
      <img
        className="about__blurb-img"
        src={meCaddy}
        alt="Sean hiking in Hawai'i"
      />
      <div className="about__blurb-text-div">
        <h5 className="about__blurb-text section__text">
          Freelancing gave me the opportunity to also caddy for my dad on the
          Champions Tours.
        </h5>
        <h5 className="about__blurb-text section__text">
          I'm incredibly lucky and grateful that I got to travel around the world, hang
          out with my dad, help him compete in professional golf tournaments and meet
          cool people for work!
        </h5>
        <h5 className="about__blurb-text section__text"></h5>
      </div>
      <div className="about__subpage-btn-div">
        {buttonFactory('dev')}
        {buttonFactory('audio')}
      </div>
    </div>
  )

  return <>{caddy}</>
}
