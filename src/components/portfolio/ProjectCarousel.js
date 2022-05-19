import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects'
import { nanoid } from 'nanoid'

export default function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(1)
  console.log(currentProject)
  // const [cardSlide, setCardSlide] = useState('no')

  function toggleCarouselNext() {
    if (currentProject === projects.length) {
      return setCurrentProject(1)
    }
    return setCurrentProject((prev) => prev + 1)
  }

  function toggleCarouselPrev() {
    if (currentProject === 1) {
      return setCurrentProject(projects.length)
    }
    return setCurrentProject((prev) => prev - 1)
  }

  const allProjects = (
    <div className="carousel__cards-container">
      {projects.map((project) => (
        <div
          className={
            project.id === currentProject
              ? 'carousel__card-container carousel__card-container--active'
              : project.id < currentProject
              ? 'carousel__card-container carousel__card-container--hidden carousel__card-container--hidden-left'
              : 'carousel__card-container carousel__card-container--hidden carousel__card-container--hidden-right'
          }
          key={nanoid()}
        >
          <ProjectCard project={project} currentProject={currentProject} />
        </div>
      ))}
    </div>
  )

  return (
    <div className="carousel">
      {/* <ProjectCard currentProject={currentProject} /> */}
      {allProjects}
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
