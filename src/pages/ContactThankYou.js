import React from 'react'
import { Link } from 'react-router-dom'
import { auxButtonFactory } from '../utils/buttonFactory'

export default function ContactThankYou({ name }) {
  const returnBtn = <Link to="/portfolio">{auxButtonFactory()}</Link>

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
