import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)

export default function MyToolbox() {
  const toolbox = useRef()
  const q = gsap.utils.selector(toolbox)
  var tlAbout = gsap.timeline()

  useEffect(() => {
    tlAbout.from(q('.stack-icon-link'), {
      opacity: 0,
      duration: 1,
      y: 10,
      stagger: 0.15
    })

    Draggable.create('.stack-icon', {
      type: 'x,y',
      bounds: document.querySelector('.section__toolbox'),
      inertia: true
    })
  }, [])

  function createIcon(url, img, name, special) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="stack-icon-link"
      >
        <div className="stack-icon-div">
          <img
            className={!special ? 'stack-icon' : 'stack-icon special-icon'}
            src={`img/stack-icons/${img}`}
            alt={`${name} icon`}
          />
        </div>
      </a>
    )
  }

  const myStack = (
    <div className="section__toolbox" ref={toolbox}>
      <h2 className="section__title section__title-toolbox">My Toolbox</h2>
      <div className="toolbox-div">
        {createIcon(
          'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
          'html5-icon.svg',
          'HTML5'
        )}
        {createIcon(
          'https://developer.mozilla.org/en-US/docs/Web/CSS',
          'css3-icon.svg',
          'CSS3'
        )}
        {createIcon(
          'https://www.youtube.com/watch?v=Sh6lK57Cuk4',
          'javascript-icon.svg',
          'JavaScript'
        )}
        {createIcon('https://reactjs.org/', 'react-icon.svg', 'React')}
        {createIcon(
          'https://reactrouter.com/',
          'react-router-icon.svg',
          'React Router',
          true
        )}
        {createIcon('https://sass-lang.com/', 'sass-icon.svg', 'Sass')}
        {createIcon(
          'https://greensock.com/',
          'gsap-icon.svg',
          'Green Sock Animation Platform'
        )}
        {createIcon('https://nodejs.org/', 'nodejs-icon.svg', 'Node.js')}
        {createIcon('https://www.mongodb.com/', 'mongodb-icon.svg', 'MongoDB')}
        {createIcon('https://www.postman.com/', 'postman-icon.svg', 'Postman')}
        {createIcon('https://git-scm.com/', 'git-icon.svg', 'Git')}
        {createIcon(
          'https://www.adobe.com/products/photoshop.html',
          'photoshop-icon.svg',
          'Adobe Photoshop'
        )}
        {/* {createIcon(
          'https://www.adobe.com/products/illustrator.html',
          'illustrator-icon.svg',
          'Adobe Illustrator'
        )} */}
        {createIcon(
          'https://www.ableton.com/',
          'ableton-icon.svg',
          'Ableton Live',
          true
        )}
      </div>
    </div>
  )

  return <>{myStack}</>
}
