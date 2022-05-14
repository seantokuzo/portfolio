import React from 'react'
import MyToolbox from '../components/MyToolbox'

export default function About() {
  return (
    <section className="about section">
      <h1 className="about__title section-title">
        Hello there, I'm <span className="about__title-span">Sean</span>
      </h1>
      <MyToolbox />
      <h3 className="about__subtitle section-subtitle"></h3>
    </section>
  )
}
