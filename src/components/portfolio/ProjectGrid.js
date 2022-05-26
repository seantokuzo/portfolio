import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { nanoid } from 'nanoid'
import projects from '../../data/projects'
import stackIcons from '../../data/stackIcons'

export default function ProjectGrid() {
  const gridRef = useRef()
  const q = gsap.utils.selector(gridRef)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.to(q('.caw'), {
      y: 0,
      stagger: 0.15,
      delay: -0.5
    })
    tl.to(q('.caw'), {
      opacity: 1,
      rotateY: '0deg',
      stagger: 0.15,
      delay: -1.5
    })
  }, [])

  const gridCards = projects.map((proj) => (
    <div
      className="project-grid__img-container caw"
      key={proj.name}
      style={{ opacity: '0', transform: 'translateY(-20px) rotateY(180deg)' }}
    >
      <img
        className="project-grid__img"
        src={proj.img}
        alt={`${proj.name} project preview`}
      />
      <div className="project-grid__details">
        <p className="project-grid__details-name section-subtitle">
          {proj.name}
        </p>
        <p className="project-grid__details-stack-text section-text">
          Made with
        </p>
        <div className="project-grid__details-stack">
          {proj.stack.map((icon) => {
            const thisIcon = stackIcons.filter((proj) => proj.name === icon)[0]
            return (
              <img
                key={nanoid()}
                src={thisIcon.img}
                className={
                  icon === 'React Router' || icon === 'Ableton Live'
                    ? 'project-grid__details-stack-icon project-grid__details-stack-icon-special'
                    : 'project-grid__details-stack-icon'
                }
                alt={`${icon} icon`}
              />
            )
          })}
        </div>
        <div className="project-grid__links">
          <a
            href={proj.link}
            className="project-grid__links-link"
            target="_blank"
            referrer="no-referrer"
          >
            <i className="fa-solid fa-arrow-up-right-from-square project-card__links-icon"></i>
            Website
          </a>
          <a
            className="project-grid__links-link"
            href={proj.github}
            target="_blank"
            referrer="noreferrer"
          >
            <i className="fa-brands fa-github project-grid__links-icon"></i>
            Github
          </a>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="project-grid" ref={gridRef}>
      {gridCards}
    </div>
  )
}
