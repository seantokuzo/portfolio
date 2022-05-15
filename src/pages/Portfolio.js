import React, { useState } from 'react'
import GridIcon from '../components/portfolio/GridIcon'
import ProjectCarousel from '../components/portfolio/ProjectCarousel'
import ProjectGrid from '../components/portfolio/ProjectGrid'

export default function Portfolio(props) {
  const [gridMode, setGridMode] = useState(false)

  function toggleGridMode() {
    setGridMode((prev) => !prev)
  }

  const myWorkContent = (
    <>
      <div className="work-toggles-container">
        <GridIcon toggleGridMode={toggleGridMode} />
      </div>
      {gridMode ? <ProjectGrid /> : <ProjectCarousel />}
    </>
  )

  return (
    <section className="section portfolio">
      <h1 className="section-title section__title-work">MyWork</h1>
      {myWorkContent}
    </section>
  )
}
