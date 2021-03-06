import React from 'react'
import { buttonFactory } from '../utils/buttonFactory'

export default function AboutCaddy() {
  const caddy = (
    <div className="about__blurb" id="extended-about">
      <img
        className="about__blurb-img"
        src="https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/me/me-caddy600.png"
        alt="Sean hiking in Hawai'i"
      />
      <div className="about__blurb-text-div">
        <h5 className="about__blurb-text section__text">
          Freelancing gave me the opportunity to also caddy for my dad on the
          PGA Champions Tour.
        </h5>
        <h5 className="about__blurb-text section__text">
          I got to travel around the world, hang out with my dad, and help him
          compete in professional golf tournaments for work!
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
