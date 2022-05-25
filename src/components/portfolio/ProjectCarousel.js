import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects'
// import { nanoid } from 'nanoid'

export default function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(1)
  // console.log(currentProject)

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

  return (
    <div className="carousel">
      <ProjectCard project={projects[currentProject - 1]} />
      <div className="carousel__toggle-div">
        <button
          className="carousel__toggle carousel__toggle-left"
          onClick={toggleCarouselPrev}
        >
          <i className="fa-solid fa-chevron-left carousel__toggle-icon"></i>
        </button>
        <button
          className="carousel__toggle carousel__toggle-right"
          onClick={toggleCarouselNext}
        >
          <i className="fa-solid fa-chevron-right carousel__toggle-icon"></i>
        </button>
      </div>
    </div>
  )
}



  // const allProjects = (
  //   <div
  //     className="carousel__cards-container"
  //     style={{ transform: `translateX(-${currentProject - 1 * 100}%)` }}
  //   >
  //     {projects.map((project) => (
  //       <div className="carousel__item" key={nanoid()}>
  //         <ProjectCard project={project} currentProject={currentProject} />
  //       </div>
  //     ))}
  //   </div>
  // )