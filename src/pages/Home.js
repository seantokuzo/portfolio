import React, { useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'
import { gsap } from 'gsap'
import HeaderTitle from '../components/HomeTitle'

export default function Home() {
  const line1 = 'Hello there'
  const line2a = "I'm "
  const line2b = 'Sean Tokuzo Simpson'
  const line3 = 'Front End Developer'
  const home = useRef()
  const q = gsap.utils.selector(home)

  useEffect(() => {
    var tl = gsap.timeline()

    tl.from(q('.home__span'), {
      opacity: 0,
      stagger: 0.1
    })
    tl.from(q('.home__span-fed'), {
      y: 100,
      opacity: 0,
      stagger: 0.3
    })
    tl.from(q('.home__subtitle-welcome'), {
      opacity: 0
    })
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
  const line2aEl = (
    <>
      {line2a.split('').map((str) => (
        <span key={nanoid()} className="home__span">
          {str}
        </span>
      ))}
    </>
  )
  const line2bEl = (
    <>
      {line2b.split('').map((str) => (
        <span key={nanoid()} className="home__span home__span-name">
          {str}
        </span>
      ))}
    </>
  )
  const line3El = (
    <>
      {line3.split(' ').map((str) => (
        <span key={nanoid()} className="home__span-fed">
          {str}{' '}
        </span>
      ))}
    </>
  )

  return (
    <section className="home section" ref={home}>
      <div className="home__title-container">
        <h1 className="home__title section__title">{line1El}</h1>
        <h1 className="home__title section__title">
          {line2aEl}
          {line2bEl}
        </h1>
        <h1 className="home__title section__title">{line3El}</h1>
      </div>
      <div className="home__subtitle-container">
        <h3 className="home__subtitle-welcome section__subtitle">Welcome</h3>
      </div>
      {/* <HeaderTitle /> */}
    </section>
  )
}

{
  /* <h1 className="home__title section__title">
          <span className="home__span">Hello</span>
          <span className="home__span"> there</span>
        </h1>
        <h1 className="home__title section__title">
          <span className="home__span">I'm </span>
          <span className="home__title-span home__span">Sean</span>
        </h1>
        <h1 className="home__title section__title">
          <span className="home__span">Front </span>
          <span className="home__span">End </span>
          <span className="home__span">Developer</span>
        </h1> */
}
