import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import MyToolbox from '../components/MyToolbox'

export default function About() {
  const about = useRef()
  const q = gsap.utils.selector(about)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.about__title'), {
      opacity: 0,
      duration: 0.15,
    })
    tl.from(q('.about__text'), {
      opacity: 0,
      stagger: 0.75,
    })
    tl.from(q('.toolbox-container'), {
      opacity: 0,
      duration: 0.35,
      delay: 0.5,
    })
  }, [])

  return (
    <section className="about section" ref={about}>
      <div className="about__about-div">
        <h1 className="about__title section__title">About Me</h1>
        <h3 className="about__text section__text">
          I am a Frontend Developer from San Diego, California - currently
          residing in Los Angeles. My passion is all things web development. I
          specialize in building accessible, engaging websites and applications.
        </h3>
        <h3 className="about__text section__text">
          Before getting into web development I worked as an audio engineer,
          studio manager and golf caddy. When I'm not coding you can usually
          find me spending time with my doggo Steve, going for a run or playing
          music.
        </h3>
      </div>
      <div className="toolbox-container">
        <MyToolbox />
      </div>
    </section>
  )
}
