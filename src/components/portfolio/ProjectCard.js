import React from 'react'
import projects from '../../data/projects'

export default function ProjectCard({ currentProject }) {
  const { name, tagline, img, link, stack } = projects[currentProject]

  return (
    <div className="project-card">
      <img
        src={`../../assets/img/project-img/${img}.png`}
        alt={`${name} project preview`}
      />
      <h2 className="project-card__title">{name}</h2>
      <p className="project-card__tagline">{tagline}</p>
      <a href={link} target="_blank" referrer="noreferrer" />
    </div>
  )
}
