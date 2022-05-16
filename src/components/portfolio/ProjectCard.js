import React from 'react'
import { nanoid } from 'nanoid'
import projects from '../../data/projects'

export default function ProjectCard({ currentProject }) {
  const { name, tagline, img, link, github, stack } = projects[currentProject]

  return (
    <div className="project-card">
      <h3 className="project-card__title section__subtitle">{name}</h3>
      <div className="project-card__img-container">
        <img
          className="project-card__img"
          src={`/images/project-img/${img}`}
          alt={`${name} project preview`}
        />
      </div>
      <p className="project-card__tagline project-card__text section__text">
        {tagline}
      </p>
      <p className="project-card__links-title project-card__text section__text">
        Check it out here:
      </p>
      <div className="project-card__links-div project-card__text">
        <a
          className="project-card__link"
          href={link}
          target="_blank"
          referrer="noreferrer"
        >
          <i className="fa-solid fa-arrow-up-right-from-square project-card__link-icon"></i>
          Website
        </a>
        <a
          className="project-card__link"
          href={github}
          target="_blank"
          referrer="noreferrer"
        >
          <i className="fa-brands fa-github project-card__link-icon"></i>
          Github
        </a>
      </div>
      <p className="project-card__stack-title project-card__text section__text">
        Made with:
      </p>
      <div className="project-card__stack-div">
        {stack.map((icon) => (
          <img
            key={nanoid()}
            src={`/images/stack-icons/${icon}-icon.svg`}
            className={
              icon === 'react-router' || icon === 'ableton'
                ? 'project-card__stack-icon special-pj-icon'
                : 'project-card__stack-icon'
            }
            alt={`${icon} icon`}
          />
        ))}
      </div>
    </div>
  )
}
