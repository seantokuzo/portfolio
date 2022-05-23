import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function WhereArtThou() {
  const navigate = useNavigate()

  const sampleBtn = (
    <div
      className="sample-btn-out where-art-thou__btn-out"
      onClick={() => navigate(-1)}
    >
      <div className="sample-btn-in where-art-thou__btn-in">
        <i className="fa-solid fa-backward where-art-thou__btn-icon"></i>
      </div>
    </div>
  )

  return (
    <section className="where-art-thou section">
      <h1 className="section__title where-art-thou__title">
        How'd we get over here?!
      </h1>
      <img
        src="https://c.tenor.com/2n7n23BkVM0AAAAC/happy-gilmore-get-me-outta-here.gif"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed where-art-thou__gif"
        allowFullScreen
      ></img>
      <h3 className="section__subtitle where-art-thou__subtitle">
        Get Me Outta Here
      </h3>
      {sampleBtn}
    </section>
  )
}
