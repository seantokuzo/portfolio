import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
// import AboutDev from './pages/AboutDev'
// import AboutAudio from './pages/AboutAudio'
// import AboutCaddy from './pages/AboutCaddy'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import ContactThankYou from './pages/ContactThankYou'
import WhereArtThou from './pages/WhereArtThou'
import Particles from './components/Particles'
import './scss/main.scss'

export default function App() {
  const [logoActive, setLogoActive] = useState(false)

  function toggleLogoActive() {
    setLogoActive((prev) => !prev)
  }

  return (
    <div className="app">
      <Header logoActive={logoActive} toggleLogoActive={toggleLogoActive} />
      <Routes>
        <Route
          path="/"
          element={
            <Home logoActive={logoActive} toggleLogoActive={toggleLogoActive} />
          }
        />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        {/* <Route path="dev" element={<AboutDev />} />
          <Route path="audio" element={<AboutAudio />} />
          <Route path="caddy" element={<AboutCaddy />} />
        </Route> */}
        <Route path="contact" element={<Contact />}>
          <Route path="thankyou" element={<ContactThankYou />} />
        </Route>
        <Route path="*" element={<WhereArtThou />} />
      </Routes>
      <Footer />
      {logoActive && <Particles />}
    </div>
  )
}
