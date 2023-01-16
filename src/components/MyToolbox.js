import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import stackIcons from '../data/stackIcons'

export default function MyToolbox() {
  const toolbox = useRef()
  const q = gsap.utils.selector(toolbox)

  useEffect(() => {
    gsap.from(q('.stack-icon-link'), {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1
    })
  }, [])

  function createIcon(link, img, name, special) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="stack-icon-link"
        key={name}
      >
        <div className="stack-icon-div">
          <img
            className={!special ? 'stack-icon' : 'special-icon'}
            src={img}
            alt={`${name} icon`}
            title={name}
          />
          {/* <p className="stack-icon--title">{name}</p> */}
        </div>
      </a>
    )
  }

  const myStack = (
    <div className="section__toolbox" ref={toolbox}>
      <h2 className="section__title section__title-toolbox">My Toolbox</h2>
      <div className="toolbox-div">
        {stackIcons.map((icon) => {
          const { link, img, name, special } = icon
          return createIcon(link, img, name, special)
        })}
      </div>
    </div>
  )

  return <>{myStack}</>
}
