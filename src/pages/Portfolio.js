import React, { useState, useContext } from 'react'
import GridIcon from '../components/portfolio/GridIcon'
import ProjectCarousel from '../components/portfolio/ProjectCarousel'
import ProjectGrid from '../components/portfolio/ProjectGrid'
import { ThemeContext } from '../context/ThemeContext'
import dayBg from '../assets/img/ctm/cb-day.png'
import nightBg from '../assets/img/ctm/cb-night.png'

export default function Portfolio(props) {
  const [gridMode, setGridMode] = useState(false)
  console.log(gridMode)
  const { darkMode } = useContext(ThemeContext)

  function toggleGridMode() {
    setGridMode((prev) => !prev)
  }

  const bgImg = darkMode ? nightBg : dayBg

  const myWorkContent = (
    <>
      <div className="work-toggles-container">
        <GridIcon toggleGridMode={toggleGridMode} />
      </div>
      {gridMode ? <ProjectGrid /> : <ProjectCarousel />}
    </>
  )

  return (
    <section
      className="section portfolio"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="section-title section__title-work">MyWork</h1>
      {myWorkContent}
    </section>
  )
}
