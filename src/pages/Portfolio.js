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
    gsap.from(q('.portfolio__icon'), {
      opacity: 0,
      y: -20,
      duration: 1,
    })
  }, [])

  // useEffect(() => {
  //   gsap.from(q('.portfolio__icon'), {
  //     rotateY: '180deg',
  //     duration: 0.25,
  //   })
  // }, [gridMode])

  const pauseToggle = () => {
    setDisableToggle(true)
    setTimeout(() => {
      setDisableToggle(false)
    }, 750)
  }

  const carouselBtn = (
    <div className="portfolio__icon-carousel portfolio__icon">
      <i className="fa-solid fa-caret-left"></i>
      <i className="fa-solid fa-caret-right"></i>
    </div>
  )

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
