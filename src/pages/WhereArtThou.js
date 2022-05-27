import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { auxButtonFactory } from '../utils/buttonFactory'

export default function WhereArtThou() {
  const navigate = useNavigate()
  const watRef = useRef()
  const q = gsap.utils.selector(watRef)

  useEffect(() => {
    gsap.from(q('.derp'), {
      opacity: 0,
      y: -20,
      stagger: 0.25
    })
    gsap.from(q('.sample-btn'), {
      opacity: 0,
      x: '100%',
      duration: 1
    })
  }, [])

  return (
    <section className="where-art-thou section" ref={watRef}>
      <h1 className="section__title where-art-thou__title derp">
        How'd we get over here?!
      </h1>
      <img
        src="https://c.tenor.com/2n7n23BkVM0AAAAC/happy-gilmore-get-me-outta-here.gif"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed where-art-thou__gif  derp"
        allowFullScreen
      ></img>
      <h3 className="section__subtitle where-art-thou__subtitle derp">
        Get Me Outta Here
      </h3>
      {auxButtonFactory(() => navigate(-1))}
    </section>
  )
}
