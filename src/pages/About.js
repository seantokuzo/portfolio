import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import MyToolbox from '../components/MyToolbox'

export default function About() {
  const about = useRef()
  const q = gsap.utils.selector(about)
  var tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.stack-icon'), {
      opacity: 0,
      duration: 2,
      stagger: 0.15
    })
  }, [])

  return (
    <section className="about section" ref={about}>
      <h1 className="about__title section-title">
        Hello there, I'm <span className="about__title-span">Sean</span>
      </h1>
      <MyToolbox />
      <h3 className="about__subtitle section-subtitle"></h3>
    </section>
  )
}
