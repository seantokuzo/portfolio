import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)
import html5Icon from '../assets/img/stack-icons/html5-icon.svg'
import css3Icon from '../assets/img/stack-icons/css3-icon.svg'
import javascriptIcon from '../assets/img/stack-icons/javascript-icon.svg'
import reactIcon from '../assets/img/stack-icons/react-icon.svg'
import reactRouterIcon from '../assets/img/stack-icons/react-router-icon.svg'
import sassIcon from '../assets/img/stack-icons/sass-icon.svg'
import nodeIcon from '../assets/img/stack-icons/nodejs-icon.svg'
import mongoIcon from '../assets/img/stack-icons/mongodb-icon.svg'
import gitIcon from '../assets/img/stack-icons/git-icon.svg'
import gsapIcon from '../assets/img/stack-icons/gsap-icon.svg'
import postmanIcon from '../assets/img/stack-icons/postman-icon.svg'
// import nextjsIcon from '../assets/img/stack-icons/nextjs-icon.svg'
// import typescriptIcon from '../assets/img/stack-icons/typescript-icon.svg'
// import tailwindIcon from '../assets/img/stack-icons/tailwindcss-icon.svg'
import photoshopIcon from '../assets/img/stack-icons/photoshop-icon.svg'
import illustratorIcon from '../assets/img/stack-icons/illustrator-icon.svg'
import abletonIcon from '../assets/img/stack-icons/ableton-icon.svg'

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
            src={img}
            alt={`${name} icon`}
          />
        </div>
      </a>
    )
  }

  const myStack = (
    <section className="section__toolbox" ref={toolbox}>
      <h2 className="section__title section__title-toolbox">My Toolbox</h2>
      <div className="toolbox-div">
        {createIcon(
          'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
          html5Icon,
          'HTML5'
        )}
        {createIcon(
          'https://developer.mozilla.org/en-US/docs/Web/CSS',
          css3Icon,
          'CSS3'
        )}
        {createIcon(
          'https://www.youtube.com/watch?v=Sh6lK57Cuk4',
          javascriptIcon,
          'JavaScript'
        )}
        {createIcon('https://reactjs.org/', reactIcon, 'React')}
        {createIcon(
          'https://reactrouter.com/',
          reactRouterIcon,
          'React Router',
          true
        )}
        {createIcon('https://sass-lang.com/', sassIcon, 'Sass')}
        {createIcon('https://nodejs.org/', nodeIcon, 'Node.js')}
        {createIcon('https://www.mongodb.com/', mongoIcon, 'MongoDB')}
        {createIcon('https://www.postman.com/', postmanIcon, 'Postman')}
        {createIcon('https://git-scm.com/', gitIcon, 'Git')}
        {createIcon(
          'https://greensock.com/',
          gsapIcon,
          'Green Sock Animation Platform'
        )}
        {createIcon(
          'https://www.adobe.com/products/photoshop.html',
          photoshopIcon,
          'Adobe Photoshop'
        )}
        {createIcon(
          'https://www.adobe.com/products/illustrator.html',
          illustratorIcon,
          'Adobe Illustrator'
        )}
        {createIcon(
          'https://www.ableton.com/',
          abletonIcon,
          'Ableton Live',
          true
        )}
      </div>
    </section>
  )

  return <>{myStack}</>
}

// NEED TO LEARN TO EARN THESE ICONS
{
  /* <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="stack-icon-link"
        >
          <div className="stack-icon-div">
            <img className="stack-icon next-icon" src={nextjsIcon} alt="Next.js icon" />
            <p className="stack-icon-tip">Next.js</p>
          </div>
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
          className="stack-icon-link"
        >
          <div className="stack-icon-div">
            <img
              className="stack-icon"
              src={typescriptIcon}
              alt="typescript icon"
            />
            <p className="stack-icon-tip">TypeScript</p>
          </div>
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          className="stack-icon-link"
        >
          <div className="stack-icon-div">
            <img
              className="stack-icon"
              src={tailwindIcon}
              alt="tailwind css icon"
            />
            <p className="stack-icon-tip">Tailwind CSS</p>
          </div>
        </a> */
}
