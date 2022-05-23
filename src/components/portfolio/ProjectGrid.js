import React from 'react'
import { nanoid } from 'nanoid'
import projects from '../../data/projects'
import stackIcons from '../../data/stackIcons'

export default function ProjectGrid() {
  const gridCards = projects.map((proj) => (
    <div className="project-grid__img-container" key={nanoid()}>
      <img
        className="project-grid__img"
        src={proj.img}
        alt={`${proj.name} project preview`}
      />
      <div className="project-grid__details-div">
        <p className="project-grid__details-name section-subtitle">
          {proj.name}
        </p>
        <p className="project-grid__details-stack-text section-text">
          Made with
        </p>
        <div className="project-grid__details-stack-div">
          {proj.stack.map((icon) => {
            const thisIcon = stackIcons.filter((proj) => proj.name === icon)[0]
            return (
              <img
                key={nanoid()}
                src={thisIcon.img}
                className={
                  icon === 'React Router' || icon === 'Ableton Live'
                    ? 'project-grid__stack-icon project-grid__special-icon'
                    : 'project-grid__stack-icon'
                }
                alt={`${icon} icon`}
              />
            )
          })}
        </div>
        <div className="project-grid__links-div">
          <a
            href={proj.link}
            className="project-grid__link"
            target="_blank"
            referrer="no-referrer"
            key={nanoid()}
          >
            <i className="fa-solid fa-arrow-up-right-from-square project-card__link-icon"></i>
            Website
          </a>
          <a
            className="project-grid__link"
            href={proj.github}
            target="_blank"
            referrer="noreferrer"
          >
            <i className="fa-brands fa-github project-grid__link-icon"></i>
            Github
          </a>
        </div>
      </div>
    </div>
  ))

  return <div className="project-grid">{gridCards}</div>
}
