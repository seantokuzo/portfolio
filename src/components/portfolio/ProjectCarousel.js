import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects'

export default function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0)

  function toggleCarousel(str) {
    if (str === 'prev' && currentProject === 0) {
      setCurrentProject(projects.length)
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
