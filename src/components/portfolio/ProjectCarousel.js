import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ProjectCard from './ProjectCard'
import projects from '../../data/projects'
// import { nanoid } from 'nanoid'

export default function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(1)
  const [disableBtns, setDisableBtns] = useState(false)
  const [slide, setSlide] = useState('no')
  // console.log(currentProject)
  const carouselRef = useRef()
  const q = gsap.utils.selector(carouselRef)

  useEffect(() => {
    if (carouselRef && slide !== 'no') {
      gsap.from(q('.project-card'), {
        rotateY: slide === 'next' ? '180deg' : '-180deg',
        duration: 0.4,
        x: slide === 'next' ? '100%' : '-100%'
      })
    }
  }, [currentProject])

  const cardSlideSetter = (str) => {
    setDisableBtns(true)
    setSlide(str)
    setTimeout(() => {
      setDisableBtns(false)
      setSlide('no')
    }, 750)
  }

  function toggleCarouselNext() {
    if (disableBtns) return
    if (currentProject === projects.length) {
      setCurrentProject(1)
    } else {
      setCurrentProject((prev) => prev + 1)
    }
    cardSlideSetter('next')
  }

  function toggleCarouselPrev() {
    if (disableBtns) return
    if (currentProject === 1) {
      setCurrentProject(projects.length)
    } else {
      setCurrentProject((prev) => prev - 1)
    }
    cardSlideSetter('prev')
  }

  function jumpToProject(projId) {
    if (projId === currentProject) return cardSlideSetter('jiggle')
    setCurrentProject(projId)
    if (projId > currentProject) cardSlideSetter('next')
    if (projId < currentProject) cardSlideSetter('prev')
  }

  const carouselToggleNumbers = (
    <>
      {projects.map((proj, i) => (
        <p
          className={
            currentProject === i + 1
              ? 'section__subtitle carousel__toggle-number carousel__toggle-number--current underline'
              : 'section__subtitle carousel__toggle-number'
          }
          onClick={() => jumpToProject(i + 1)}
        >
          {i + 1}
        </p>
      ))}
    </>
  )
  return (
    <div className="carousel" ref={carouselRef}>
      <ProjectCard project={projects[currentProject - 1]} />
      <div className="carousel__toggles">
        <button
          className="carousel__toggle carousel__toggle-left"
          onClick={toggleCarouselPrev}
        >
          <i className="fa-solid fa-chevron-left carousel__toggle-icon"></i>
        </button>
        {carouselToggleNumbers}
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
