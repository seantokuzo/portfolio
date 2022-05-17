import React from 'react'
import { Link } from 'react-router-dom'

export default function WhereArtThou() {
  const sampleBtn = (
    <div className="sample-btn-out">
      <div className="sample-btn-in">
        <i id="break-increment" className="fa-solid fa-angle-up btn-icon"></i>
      </div>
    </div>
  )

  return (
    <section className="where-art-thou section">
      <h1 className="section__title">How'd we get over here?!</h1>
      <iframe
        src="https://giphy.com/embed/3ohzdYJK1wAdPWVk88"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed oops"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/workaholics-episode-9-season-7-3ohzdYJK1wAdPWVk88">
          via GIPHY
        </a>
      </p>
      <h3 className="section__title">Get Me Outta Here</h3>
      {sampleBtn}
    </section>
  )
}
