import React from 'react'
import { nanoid } from 'nanoid'
import projects from '../../data/projects'

export default function ProjectCard({ currentProject }) {
  const { name, tagline, img, link, stack } = projects[currentProject]

  return (
    <div className="project-card">
      <h1 className="project-card__title section__title">{name}</h1>
      <div className="project-card__img-container">
        <img
          className="project-card__img"
          src={`/images/project-img/${img}`}
          alt={`${name} project preview`}
        />
      </div>
      <p className="project-card__tagline section__text">{tagline}</p>
      <a
        className="project-card__link"
        href={link}
        target="_blank"
        referrer="noreferrer"
      >Demo</a>
      <div className="project-card__stack-div">
        {stack.map((icon) => (
          <img
            key={nanoid()}
            src={`/images/stack-icons/${icon}-icon.svg`}
            className="project-card__stack-icon"
            alt={`${icon} icon`}
          />
        ))}
      </div>
    </div>
  )
}
