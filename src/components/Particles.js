import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'

export default function Particles() {
  const [vw, setVw] = useState(0)
  const [vh, setVh] = useState(0)

  useEffect(() => {
    setVw(window.innerWidth)
    setVh(window.innerHeight)
  }, [window.innerWidth, window.innerHeight])

  var textures = document.querySelectorAll('.star')
  var main = document.querySelector('main')
  var frag = document.createDocumentFragment()

  var appearMin = 0.3
  var appearMax = 0.8

  var delayMin = 2
  var delayMax = 6

  var durationMin = 0.3
  var durationMax = 1

  var numAnimations = 50
  var numStars = 300

  var stars = []
  var eases = []

  for (var i = 0; i < numAnimations; i++) {
    var ease = {
      duration: 2.5,
      ease: 'rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})',
      y: -500
    }

    eases.push(ease)
  }

  // Wait for images to load
  window.addEventListener('load', onLoad)

  function onLoad() {
    for (var i = 0; i < numStars; i++) {
      stars.push(createStar())
    }

    main.appendChild(frag)
  }

  function createStar() {
    var index = random(textures.length) | 0
    var star = textures[index].cloneNode(true)
    frag.appendChild(star)

    Tween.set(star, {
      rotation: random(360),
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      x: random(vw),
      y: random(vh)
    })

    var tl = new Timeline({ repeat: -1, yoyo: true })

    for (var i = 0; i < numAnimations; i++) {
      var ease1 = eases[random(numAnimations) | 0]
      var ease2 = eases[random(numAnimations) | 0]

      var alpha = random(0.7, 1)
      var scale = random(0.15, 0.4)

      var appear = '+=' + random(appearMin, appearMax)
      var delay = '+=' + random(delayMin, delayMax)
      var duration1 = random(durationMin, durationMax)
      var duration2 = random(durationMin, durationMax)

      tl.to(
        star,
        duration1,
        { autoAlpha: alpha, scale: scale, ease: ease1 },
        delay
      ).to(star, duration2, { autoAlpha: 0, scale: 0, ease: ease2 }, appear)
    }

    tl.progress(random(1))

    return {
      element: star,
      timeline: tl
    }
  }

  function random(min, max) {
    if (max == null) {
      max = min
      min = 0
    }
    if (min > max) {
      var tmp = min
      min = max
      max = tmp
    }
    return min + (max - min) * Math.random()
  }

  const particles = <div className="particles"></div>

  return <>{particles}</>
}
