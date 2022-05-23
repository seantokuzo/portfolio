import React, { useState } from 'react'
// import React, { useState, useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import About from './pages/About'
import AboutDev from './pages/AboutDev'
import AboutAudio from './pages/AboutAudio'
import AboutCaddy from './pages/AboutCaddy'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import ContactThankYou from './pages/ContactThankYou'
import WhereArtThou from './pages/WhereArtThou'
import Particles from './components/Particles'
import './scss/main.scss'

export default function App() {
  const [logoActive, setLogoActive] = useState(false)
  // const [volume, setVolume] = useState(0.1)
  // const volumeInputEl = useRef()

  // useEffect(() => {
  //   var audioEl = document.getElementById('bg-audio')

  //   if (logoActive) {
  //     audioEl.play()
  //     gsap.from('.volume-slider', {
  //       opacity: 0,
  //       duration: 1
  //     })
  //     return
  //   }
  //   audioEl.pause()
  //   audioEl.currentTime = 0
  // }, [logoActive])

  // useEffect(() => {
  //   const audioEl = document.getElementById('bg-audio')
  //   audioEl.volume = volume
  // }, [volume])

  // function adjustVolume(e) {
  //   setVolume(e.target.value)
  // }

  // function resetVolume() {
  //   if (volume === 0) {
  //     return setVolume(0.1)
  //   }
  //   setVolume(0)
  // }

  function toggleLogoActive() {
    setLogoActive((prev) => !prev)
  }

  // const volumeSlider = (
  //   <div className="volume-slider" ref={volumeInputEl}>
  //     <input
  //       max="1"
  //       min="0"
  //       onChange={(event) => adjustVolume(event)}
  //       onDoubleClick={resetVolume}
  //       step="0.01"
  //       type="range"
  //       value={volume}
  //       id="volume"
  //     />
  //   </div>
  // )

  return (
    <div className="app">
      {logoActive && <Particles />}
      <Header logoActive={logoActive} toggleLogoActive={toggleLogoActive} />
      {/* {logoActive && volumeSlider} */}
      <Routes>
        <Route
          path="/"
          element={
            <Home logoActive={logoActive} toggleLogoActive={toggleLogoActive} />
          }
        />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />}>
          <Route path="dev" element={<AboutDev />} />
          <Route path="audio" element={<AboutAudio />} />
          <Route path="caddy" element={<AboutCaddy />} />
        </Route>
        <Route path="contact" element={<Contact />}>
          <Route path="thankyou" element={<ContactThankYou />} />
        </Route>
        <Route path="*" element={<WhereArtThou />} />
      </Routes>
      {/* <audio
        src="https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-audio/ichi-loop.m4a"
        loop={true}
        id="bg-audio"
        preload="auto"
      /> */}
    </div>
  )
}
