import React, { useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { gsap } from 'gsap'
import { nanoid } from 'nanoid'
import stackIcons from '../../data/stackIcons'
import otherStackIcons from '../../data/otherIcons'

export default function ProjectCard({ project }) {
  const { darkMode } = useContext(ThemeContext)
  const { name, tagline, imgLight, imgDark, link, github, stack } = project

  const projectCard = useRef()
  const q = gsap.utils.selector(projectCard)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.thumb'), {
      opacity: 0,
      duration: 0.5,
    })
    tl.from(q('.meow'), {
      opacity: 0,
      scale: 0,
      stagger: 0.1,
      delay: -0.7,
    })
    tl.from(q('.bark'), {
      opacity: 0,
      stagger: 0.15,
      ease: 'power1.out',
      delay: -0.75,
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
          rel="noreferrer"
        >
          <img
            className="project-card__img"
            src={darkMode ? imgDark : imgLight}
            alt={`${name} project preview`}
          />
        </a>
      </div>
      <p className="project-card__tagline project-card__text section__text meow">
        {tagline}
      </p>
      <div className="project-card__links">
        <p className="project-card__links-title project-card__text section__text meow">
          Check it out:
        </p>
        <div className="project-card__links-div">
          <a
            className="project-card__links-link meow"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-arrow-up-right-from-square project-card__links-link-icon"></i>
            <span className="project-card__links-link-text">Website</span>
          </a>
          <a
            className="project-card__links-link meow"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github project-card__links-link-icon"></i>
            <span className="project-card__links-link-text">Github</span>
          </a>
        </div>
      </div>
      <div className="project-card__stack meow">
        <p className="project-card__stack-title project-card__text section__text bark">
          Made with:
        </p>
        <div className="project-card__stack-icons">
          {stack.map((icon) => {
            let thisIcon = stackIcons.filter((proj) => proj.name === icon)[0]
            if (!thisIcon) {
              thisIcon = otherStackIcons.filter((proj) => proj.name === icon)[0]
            }
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
                title={thisIcon.name}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
