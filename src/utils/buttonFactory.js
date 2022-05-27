import React from 'react'
import { Link } from 'react-router-dom'

const buttonFactory = (text) => {
  return (
    <Link to={`/about/${text}`}>
      <div className={`sample-btn`}>
        <div className="sample-btn-in">
          <p className="about__btn-text sample-btn-text">{text.slice(0, 1)}</p>
        </div>
      </div>
    </Link>
  )
}

export { buttonFactory }
