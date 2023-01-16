import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import MyToolbox from '../components/MyToolbox'

export default function About() {
  const { pathname } = useLocation()
  const about = useRef()
  const q = gsap.utils.selector(about)
  const tl = gsap.timeline()

  // useEffect(() => {
  //   tl.from(q('.about--initial'), {
  //     opacity: 0,
  //     duration: 0.15
  //   })
  //   tl.from(q('.sample-btn'), {
  //     opacity: 0,
  //     y: -100,
  //     ease: 'bounce.out',
  //     stagger: 0.5
  //   })
  //   tl.from(q('.about__starter-title'), {
  //     opacity: 0,
  //     y: -50
  //   })
  // }, [pathname])

  return (
    <section className="about section" ref={about}>
      <h1 className="about__title section__title">About Me</h1>
      <h3 className="about__text section__text">
        I am a Frontend Developer from San Diego, California - currently
        residing in Los Angeles. My passion is all things web development. I
        specialize in building accessible, engaging websites and applications.
      </h3>
      <h3 className="about__text section__text">
        Before getting into web development I worked as an audio engineer,
        studio manager and golf caddy. When I'm not coding you can usually find
        me spending time with my doggo Steve, going for a run or playing music.
      </h3>
      <h3 className="about__text section__text"></h3>
      <MyToolbox />
    </section>
  )
}
