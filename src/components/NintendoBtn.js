import React from 'react'

export default function NintendoBtn({ size, lost }) {
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

  return <>{sampleBtn}</>
}
