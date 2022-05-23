import React from 'react'
import { buttonFactory } from '../../utils/factoryFunctions'
import meCaddy from '../../img/me/me-caddy.png'

export default function Caddy() {
  const caddy = (
    <div className="about__blurb-div" id="extended-about">
      <img
        className="about__blurb-img"
        src={meCaddy}
        alt="Sean hiking in Hawai'i"
      />
      <div className="about__blurb-text-div">
        <h5 className="about__blurb-text section__text">
          Freelancing gave me the opportunity to also caddy for my dad, who
          played professional golf on the PGA and Champions Tours.
        </h5>
        <h5 className="about__blurb-text section__text">
          I got to caddy for his last years playing, traveling all over
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
