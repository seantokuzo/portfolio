import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ProjectCarousel from '../components/portfolio/ProjectCarousel'

export default function Portfolio() {
  const portfolio = useRef()
  const q = gsap.utils.selector(portfolio)

  useEffect(() => {
    gsap.from(q('.portfolio__title'), {
      opacity: 0,
      y: -20,
      duration: 1,
    })
  }, [])

  const myWorkContent = (
    <>
      <div className={'portfolio__container portfolio__container-carousel'}>
        <ProjectCarousel />
      </div>
    </>
  )

  return (
    <section className="section portfolio" ref={portfolio}>
      <div className="portfolio__title-icon-div">
        <h1 className="section__title portfolio__title">My Work</h1>
      </div>
      {myWorkContent}
    </section>
  )
}
