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

const auxButtonFactory = (handleClick) => {
  return (
    <div className={`sample-btn`} onClick={handleClick}>
      <div className="sample-btn-in">
        <i className="fa-solid fa-chevron-left aux-btn-text"></i>
      </div>
    </div>
  )
}

export { buttonFactory, auxButtonFactory }
