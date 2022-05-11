import React from "react"
import html5Icon from "../img/stack-icons/html5-icon.svg"
import css3Icon from "../img/stack-icons/css3-icon.svg"
import javascriptIcon from "../img/stack-icons/javascript-icon.svg"
import reactIcon from "../img/stack-icons/react-icon.svg"
import nodeIcon from "../img/stack-icons/nodejs-icon.svg"
import mongoIcon from "../img/stack-icons/mongodb-icon.svg"
import typescriptIcon from "../img/stack-icons/typescript-icon.svg"
import postmanIcon from "../img/stack-icons/postman-icon.svg"
import photoshopIcon from "../img/stack-icons/photoshop-icon.svg"
import illustratorIcon from "../img/stack-icons/illustrator-icon.svg"
import abletonIcon from "../img/stack-icons/ableton-icon.svg"

export default function Toolbox() {
  const myStack = (
    <section className="section__toolbox">
      <h2 className="section__title section__title-toolbox">My Toolbox</h2>
      <div className="toolbox-div">
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          target="_blank"
          rel="noreferrer"
        >
          <img className="stack-icon" src={html5Icon} alt="html5 icon" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          <img className="stack-icon" src={css3Icon} alt="css3 icon" />
        </a>
        <a
          href="https://www.youtube.com/watch?v=Sh6lK57Cuk4"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="stack-icon"
            src={javascriptIcon}
            alt="javascript icon"
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img className="stack-icon" src={reactIcon} alt="react icon" />
        </a>
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
          <img className="stack-icon" src={nodeIcon} alt="node icon" />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img className="stack-icon" src={mongoIcon} alt="mongo icon" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="stack-icon"
            src={typescriptIcon}
            alt="typescript icon"
          />
        </a>
        <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
          <img className="stack-icon" src={postmanIcon} alt="postman icon" />
        </a>
        <a
          href="https://www.adobe.com/products/photoshop.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="stack-icon"
            src={photoshopIcon}
            alt="photoshop icon"
          />
        </a>
        <a
          href="https://www.adobe.com/products/illustrator.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="stack-icon"
            src={illustratorIcon}
            alt="illustrator icon"
          />
        </a>
        <a href="https://www.ableton.com/" target="_blank" rel="noreferrer">
          <img
            className="stack-icon ableton-icon"
            src={abletonIcon}
            alt="ableton icon"
          />
        </a>
      </div>
    </section>
  )

  return <>{myStack}</>
}
