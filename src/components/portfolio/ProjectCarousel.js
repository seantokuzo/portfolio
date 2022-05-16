import React, { useState } from 'react'
// import { gsap } from 'gsap'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects'

export default function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0)
  // const [cardSlide, setCardSlide] = useState('no')
  // console.log(cardSlide)
  // const tl = gsap.timeline()

  function toggleCarousel(str) {
    // setCardSlide(str)
    if (str === 'prev') {
      if (currentProject === 0) {
        return setCurrentProject(projects.length - 1)
      }
      return setCurrentProject((prev) => prev - 1)
    }

    if (str === 'next') {
      if (currentProject === projects.length - 1) {
        return setCurrentProject(0)
      }
      return setCurrentProject((prev) => prev + 1)
    }
  }

  return (
    <div className="project-carousel">
      <div
        className="carousel-toggle carousel-toggle-left"
        onClick={() => toggleCarousel('prev')}
      >
        <i className="fa-solid fa-chevron-left carousel-toggle-icon"></i>
      </div>
      <ProjectCard currentProject={currentProject} />
      <div
        className="carousel-toggle carousel-toggle-right"
        onClick={() => toggleCarousel('next')}
      >
        <i className="fa-solid fa-chevron-right carousel-toggle-icon"></i>
      </div>
    </div>
  )
}
