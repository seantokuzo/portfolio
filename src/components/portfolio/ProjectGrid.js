import React from 'react'
import { nanoid } from 'nanoid'
import projects from '../../data/projects'

export default function ProjectGrid() {
  const gridCards = projects.map((proj) => (
    <div className="project-grid__img-container" key={nanoid()}>
      <a href={proj.link} className='project-grid__link' target="_blank" referrer="no-referrer">
        <img
          className="project-grid__img"
          src={proj.img}
          alt={`${proj.name} project preview`}
        />
      </a>
    </div>
  ))

  return <div className="project-grid">{gridCards}</div>
}
