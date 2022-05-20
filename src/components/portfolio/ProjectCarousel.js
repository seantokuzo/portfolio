import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects'
import { nanoid } from 'nanoid'

export default function ProjectCarousel() {
  const ANIME_TIME = 3000
  const [currentProject, setCurrentProject] = useState(1)
  console.log(currentProject)
  const [cardSlide, setCardSlide] = useState('no')

  const animationHelper = (type, time) => {
    setTimeout(() => {
      setCardSlide(type)
    }, time)
    setCardSlide('no')
  }

  function toggleCarouselNext() {
    animationHelper('next', ANIME_TIME)
    if (currentProject === projects.length) {
      return setCurrentProject(1)
    }
    return setCurrentProject((prev) => prev + 1)
  }

  function toggleCarouselPrev() {
    animationHelper('prev', ANIME_TIME)
    if (currentProject === 1) {
      return setCurrentProject(projects.length)
    }
    return setCurrentProject((prev) => prev - 1)
  }

  const allProjects = (
    <div className="carousel__cards-container">
      {projects.map((project) => (
        <ProjectCard
          project={project}
          currentProject={currentProject}
          cardSlide={cardSlide}
          key={nanoid()}
        />
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
