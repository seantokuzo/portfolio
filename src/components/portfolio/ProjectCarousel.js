import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects'

export default function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0)
  // const [cardSlide, setCardSlide] = useState('no')

  function toggleCarouselNext() {
    if (currentProject === projects.length - 1) {
      return setCurrentProject(0)
    }
    return setCurrentProject((prev) => prev + 1)
  }

  function toggleCarouselPrev() {
    if (currentProject === 0) {
      return setCurrentProject(projects.length - 1)
    }
    return setCurrentProject((prev) => prev - 1)
  }

  return (
    <div className="project-carousel">
      <ProjectCard currentProject={currentProject} />
      <div className="carousel-toggle-div">
        <button
          className="carousel-toggle carousel-toggle-left"
          onClick={toggleCarouselPrev}
        >
          <i className="fa-solid fa-chevron-left carousel-toggle-icon"></i>
        </button>
        <button
          className="carousel-toggle carousel-toggle-right"
          onClick={toggleCarouselNext}
        >
          <i className="fa-solid fa-chevron-right carousel-toggle-icon"></i>
        </button>
      </div>
    </div>
  )
}
