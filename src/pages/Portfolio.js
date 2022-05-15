import React, { useState } from 'react'
import GridIcon from '../components/portfolio/GridIcon'
import ProjectCarousel from '../components/portfolio/ProjectCarousel'
import ProjectGrid from '../components/portfolio/ProjectGrid'

export default function Portfolio(props) {
  const [gridMode, setGridMode] = useState(false)

  function toggleGridMode() {
    setGridMode((prev) => !prev)
  }

  const carouselBtn = (
    <div className="carousel-icon-container" onClick={toggleGridMode}>
      <i className="fa-solid fa-caret-left"></i>
      <i className="fa-solid fa-caret-right"></i>
    </div>
  )

  const myWorkContent = (
    <>
      <div className="work-toggles-container">
        {gridMode ? carouselBtn : <GridIcon toggleGridMode={toggleGridMode} />}
      </div>
      {gridMode ? <ProjectGrid /> : <ProjectCarousel />}
    </>
  )

  return (
    <section className="section portfolio">
      <h1 className="section__title portfolio__title">MyWork</h1>
      {myWorkContent}
    </section>
  )
}
