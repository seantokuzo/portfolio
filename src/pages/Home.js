import React, { useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { gsap } from 'gsap'

export default function Home({ logoActive, toggleLogoActive }) {
  const { darkMode } = useContext(ThemeContext)
  // console.log(darkMode)
  const line1 = "hello there, i'm"
  const line2 = 'sean.tokuzo.simpson'
  const line3 = 'front end developer'
  const home = useRef()
  const q = gsap.utils.selector(home)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.home__span'), {
      opacity: 0,
      stagger: 0.05,
      delay: 0.25
    })
    tl.from(q('.home__span-name'), {
      opacity: 0,
      rotateY: '180deg',
      stagger: 0.06,
      delay: -0.06
    })
    tl.from(q('.home__span-fed'), {
      y: 10,
      opacity: 0,
      stagger: 0.3,
      delay: -0.1
    })
    tl.from(q('.home__subtitle-welcome'), {
      opacity: 0,
      duration: 2
    })
    tl.from(
      q('.home__next'),
      {
        opacity: 0,
        duration: 2
      },
      '-=1.5'
    )
  }, [])

  const line1El = (
    <>
      {line1.split('').map((str) => (
        <span key={nanoid()} className="home__span">
          {str}
        </span>
      ))}
    </>
  )

  const line2bEl = (
    <>
      {line2.split('').map((str) => (
        <span key={nanoid()} className="home__span-name">
          {str}
        </span>
      ))}
    </>
  )
  const line3El = (
    <>
      {line3.split(' ').map((str) => (
        <span key={nanoid()} className="home__span-fed">
          {str}
        </span>
      ))}
    </>
  )

  const playLink = logoActive ? (
    <Link to="/portfolio">
      <i className="fa-solid fa-chevron-right section__next home__next"></i>
    </Link>
  ) : (
    <i
      className="fa-solid fa-caret-right section__next home__next"
      onClick={toggleLogoActive}
    ></i>
  )

  // const sampleBtn = (
  //   <div className="sample-btn-out">
  //     <div className="sample-btn-in">
  //       <i id="break-increment" className="fa-solid fa-angle-up btn-icon"></i>
  //     </div>
  //   </div>
  // )

  return (
    <section className="home section" ref={home}>
      <div className="home__title-container">
        <h1 className="home__title section__title">{line1El}</h1>
        {/* <h1 className="home__title section__title">{line2aEl}</h1> */}
        <h1 className="home__title home__title-name section__title">
          {line2bEl}
        </h1>
        <h1 className="home__title section__title">{line3El}</h1>
      </div>
      <div className="home__subtitle-container">
        <h3 className="home__subtitle-welcome section__subtitle">WELCOME</h3>
        {playLink}
      </div>
      {/* {logoActive && sampleBtn} */}
    </section>
  )
}
