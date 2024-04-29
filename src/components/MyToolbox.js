import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import stackIcons from '../data/stackIcons'

export default function MyToolbox() {
  const toolbox = useRef()
  const q = gsap.utils.selector(toolbox)

  useEffect(() => {
    gsap.from(q('.toolbox-div'), {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    })
    gsap.from(q('.stack-icon-div'), {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 1,
    })
  }, [])

  function createIcon(img, name, special) {
    return (
      <div className="stack-icon-div" key={name}>
        <img
          className={!special ? 'stack-icon' : 'special-icon'}
          src={img}
          alt={`${name} icon`}
          title={name}
        />
        {/* <p className="stack-icon--title section__text">{name}</p> */}
      </div>
      // </a>
    )
  }

  const myStack = (
    <div className="section__toolbox" ref={toolbox}>
      <h2 className="section__title section__title-toolbox">Skills</h2>
      <div className="toolbox-div">
        {stackIcons.map((icon) => {
          const { img, name, special } = icon
          return createIcon(img, name, special)
        })}
      </div>
    </div>
  )

  return <>{myStack}</>
}
