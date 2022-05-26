import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'
import { nanoid } from 'nanoid'
import projects from '../../data/projects'
import stackIcons from '../../data/stackIcons'

export default function ProjectCard({ project }) {
  const { name, tagline, img, link, github, stack } = project

  const projectCard = useRef()
  const q = gsap.utils.selector(projectCard)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.thumb'), {
      opacity: 0,
      x: 20,
      // scale: 0,
      duration: .25,
    })
    tl.from(q('.meow'), {
      opacity: 0,
      y: -10,
      stagger: 0.1,
      delay: -0.25
    })
    tl.from(q('.bark'), {
      opacity: 0,
      y: -10,
      scale: 1.5,
      stagger: 0.075,
      delay: -0.65
    })
  }, [project])

  return (
    <div className={'project-card'} ref={projectCard}>
      <h3 className="project-card__title section__subtitle meow">{name}</h3>
      <div className="project-card__img-container thumb">
        <a
          className="project-card__img-link thumb"
          href={link}
          target="_blank"
          referrer="noreferrer"
        >
          <img
            className="project-card__img thumb"
            src={img}
            alt={`${name} project preview`}
          />
        </a>
      </div>
      <p className="project-card__tagline project-card__text section__text meow">
        {tagline}
      </p>
      <div className="project-card__links meow">
        <p className="project-card__links-title project-card__text section__text">
          Check it out:
        </p>
        <div className="project-card__links-div">
          <a
            className="project-card__links-link"
            href={link}
            target="_blank"
            referrer="noreferrer"
          >
            <i className="fa-solid fa-arrow-up-right-from-square project-card__links-link-icon"></i>
            <span className="project-card__links-link-text">Website</span>
          </a>
          <a
            className="project-card__links-link"
            href={github}
            target="_blank"
            referrer="noreferrer"
          >
            <i className="fa-brands fa-github project-card__links-link-icon"></i>
            <span className="project-card__links-link-text">Github</span>
          </a>
        </div>
      </div>
      <div className="project-card__stack meow">
        <p className="project-card__stack-title project-card__text section__text meow">
          Made with:
        </p>
        <div className="project-card__stack-icons">
          {stack.map((icon) => {
            const thisIcon = stackIcons.filter((proj) => proj.name === icon)[0]
            return (
              <img
                key={nanoid()}
                src={thisIcon.img}
                className={
                  icon === 'React Router' || icon === 'Ableton Live'
                    ? 'project-card__stack-icons-icon project-card__stack-icons-icon-special bark'
                    : 'project-card__stack-icons-icon bark'
                }
                alt={`${icon} icon`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
