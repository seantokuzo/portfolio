import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text section__text">© seantokuzo 2022</p>
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/sean-tokuzo/"
          className="footer__link"
          target="_blank"
          referrer="no-referrer"
        >
          <i class="fa-brands fa-linkedin footer__link-icon"></i>
        </a>
        <a
          href="https://github.com/seantokuzo"
          className="footer__link"
          target="_blank"
          referrer="no-referrer"
        >
          <i class="fa-brands fa-github footer__link-icon"></i>
        </a>
        <a
          href="https://codepen.io/seantokuzo"
          className="footer__link"
          target="_blank"
          referrer="no-referrer"
        >
          <i class="fa-brands fa-codepen footer__link-icon"></i>
        </a>
      </div>
    </footer>
  )
}
