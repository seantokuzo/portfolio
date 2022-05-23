import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactThankYou({ name }) {
  const returnBtn = (
    <Link to="/portfolio">
      <div className="sample-btn-out where-art-thou__btn-out">
        <div className="sample-btn-in where-art-thou__btn-in">
          <i className="fa-solid fa-backward where-art-thou__btn-icon"></i>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="section thankyou">
      <p className="section__subtitle thankyou__text">
        thanks for reaching out, {name ? name : 'you'}
      </p>
      <p className="section__subtitle thankyou__text">
        i will get back to you shortly
      </p>
      {returnBtn}
    </div>
  )
}
