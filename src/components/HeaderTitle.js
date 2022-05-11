import React, { useState, useEffect } from "react"

export default function HeaderTitle() {
  const name = ["sean", "tokuzo", "simpson"]
  const job = ["front", "end", "developer"]
  const [title1, setTitle1] = useState([])
  const [title2, setTitle2] = useState([])
  const [title3, setTitle3] = useState([])
  const [typingName, setTypingName] = useState(true)
  const [textMove, setTextMove] = useState(false)
  // console.log(textMove)

  useEffect(() => {
    if (title1.length + title2.length + title3.length === 17) {
      setTimeout(() => {
        setTextMove(true)
        setTimeout(() => {
          setTextMove(false)
        }, 4000)
      }, 1500)
    }
  }, [title3])

  useEffect(() => {
    function typer(textArray) {
      if (title1.length < textArray[0].length) {
        setTimeout(() => {
          setTitle1((prevTitle) => [
            ...prevTitle,
            textArray[0][prevTitle.length],
          ])
        }, 100)
      } else if (title2.length < textArray[1].length) {
        setTimeout(() => {
          setTitle2((prevTitle) => [
            ...prevTitle,
            textArray[1][prevTitle.length],
          ])
        }, 100)
      } else if (title3.length < textArray[2].length) {
        setTimeout(() => {
          setTitle3((prevTitle) => [
            ...prevTitle,
            textArray[2][prevTitle.length],
          ])
        }, 100)
      } else {
        setTimeout(() => {
          setTypingName((prev) => !prev)
          setTitle1([])
          setTitle2([])
          setTitle3([])
        }, 5000)
      }
    }
    if (typingName) {
      typer(name)
    } else if (!typingName) {
      typer(job)
    }
  }, [title1, title2, title3, typingName])

  const headerTitleAnimation1 = {
    animation: textMove ? "header-title-move1 4s ease-in-out" : "none",
  }
  const headerTitleAnimation2 = {
    animation: textMove ? "header-title-move2 4s ease-in-out" : "none",
  }
  const headerTitleAnimation3 = {
    animation: textMove ? "header-title-move3 4s ease-in-out" : "none",
  }

  const headerTitleAllAnimation = {
    animation: textMove
      ? "header-title-fade-scale 4s ease-in-out forwards"
      : "none",
  }

  return (
    <div className="header__title-div" style={headerTitleAllAnimation}>
      <h2
        className="section__bigtext section__bigtext-header header__title-1"
        style={headerTitleAnimation1}
      >
        {title1.join("")}
      </h2>
      <h2
        className="section__bigtext section__bigtext-header header__title-2"
        style={headerTitleAnimation2}
      >
        {title2.join("")}
      </h2>
      <h2
        className="section__bigtext section__bigtext-header header__title-3"
        style={headerTitleAnimation3}
      >
        {title3.join("")}
      </h2>
    </div>
  )
}
