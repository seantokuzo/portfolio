import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ProjectCarousel from '../components/portfolio/ProjectCarousel'
import ProjectGrid from '../components/portfolio/ProjectGrid'

export default function Portfolio() {
  const [gridMode, setGridMode] = useState(false)
  const portfolio = useRef()
  const q = gsap.utils.selector(portfolio)

  useEffect(() => {
    gsap.from(q('.portfolio__title'), {
      opacity: 0,
      y: -20,
      duration: 1
    })
    gsap.from(q('.portfolio__icon'), {
      opacity: 0,
      y: -20,
      duration: 1
    })
  }, [])

  function toggleGridMode() {
    setGridMode((prev) => !prev)
  }

  const gridIcon = (
    <div
      className="grid-icon-container portfolio__icon"
      onClick={toggleGridMode}
    >
      {new Array(16).fill('').map((s, i) => (
        <div className="grid-sqr" key={`grid-sqr${i}`}></div>
      ))}
    </div>
  )

  const carouselBtn = (
    <div
      className="carousel-icon-container portfolio__icon"
      onClick={toggleGridMode}
    >
      <i className="fa-solid fa-caret-left"></i>
      <i className="fa-solid fa-caret-right"></i>
    </div>
  )

  const myWorkContent = (
    <>
      <div className="portfolio__container">
        {gridMode ? <ProjectGrid /> : <ProjectCarousel />}
      </div>
    </>
  )

  return (
    <section className="section portfolio" ref={portfolio}>
      <div className="portfolio__title-icon-div">
        <h1 className="section__title portfolio__title">MyWork</h1>
        {gridMode ? carouselBtn : gridIcon}
      </div>
      {myWorkContent}
    </section>
  )
}
