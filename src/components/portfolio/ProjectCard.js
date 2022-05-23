import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { nanoid } from 'nanoid'
import projects from '../../data/projects'
import stackIcons from '../../data/stackIcons'

export default function ProjectCard({ project }) {
  const { name, tagline, img, link, github, stack } = project

  const projectCard = useRef()
  const q = gsap.utils.selector(projectCard)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.meow'), {
      opacity: 0,
      y: -10,
      stagger: 0.1
    })
    tl.from(q('.bark'), {
      opacity: 0,
      y: -10,
      scale: 1.5,
      stagger: 0.1
    })
  }, [])

  return (
    <div className={'project-card'} ref={projectCard}>
      <h3 className="project-card__title section__subtitle meow">{name}</h3>
      <div className="project-card__img-container meow">
        <a
          className="project-card__img-link"
          href={link}
          target="_blank"
          referrer="noreferrer"
        >
          <img
            className="project-card__img"
            src={img}
            alt={`${name} project preview`}
          />
        </a>
      </div>
      <p className="project-card__tagline project-card__text section__text meow">
        {tagline}
      </p>
      <p className="project-card__links-title project-card__text section__text meow">
        Check it out here:
      </p>
      <div className="project-card__links-div project-card__text meow">
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
      <p className="project-card__stack-title project-card__text section__text meow">
        Made with:
      </p>
      <div className="project-card__stack-div meow">
        {stack.map((icon) => {
          const thisIcon = stackIcons.filter((proj) => proj.name === icon)[0]
          return (
            <img
              key={nanoid()}
              src={thisIcon.img}
              className={
                icon === 'React Router' || icon === 'Ableton Live'
                  ? 'project-card__stack-icon special-pj-icon bark'
                  : 'project-card__stack-icon bark'
              }
              alt={`${icon} icon`}
            />
          )
        })}
      </div>
    </div>
  )
}
