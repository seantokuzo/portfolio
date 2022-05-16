import { Router } from 'react-router-dom'

const projects = [
  {
    id: 1,
    name: 'Bobby Shmurdle',
    tagline: 'A Bobby Shmurda themed Wordle clone you can play forever',
    img: 'bobby-shmurdle.png',
    link: 'https://bobby-shmurdle.netlify.app/',
    github: 'https://github.com/seantokuzo/bobby-shmurdle',
    stack: ['react', 'css3']
  },
  {
    id: 2,
    name: 'Natours',
    img: 'calculator-800sqr.png',
    link: 'https://study-timer-seantokuzo.netlify.app/',
    github: 'https://github.com/seantokuzo/StudyTimer',
    tagline: 'A fullstack mock e-commerce site for a tour company',
    stack: ['nodejs', 'mongodb', 'pug', 'postman']
  },
  {
    id: 3,
    name: 'Study Timer',
    img: 'study-timer-800sqr.png',
    link: 'https://study-timer-seantokuzo.netlify.app/',
    github: 'https://github.com/seantokuzo/StudyTimer',
    tagline: 'A nintendo themed study & break session timer.',
    stack: ['react', 'css3']
  },
  {
    id: 4,
    name: 'Movie Watchlist',
    img: 'movie-watchlist-800sqr.png',
    link: 'https://seantokuzo.github.io/MovieWatchlist/',
    github: 'https://github.com/seantokuzo/MovieWatchlist',
    tagline:
      'Build your own movie watchlist. Powered by The Movie Database API',
    stack: ['react', 'css3']
  },
  {
    id: 5,
    name: 'My Portfolio',
    img: 'movie-watchlist-800sqr.png',
    link: 'https://www.seantokuzo.dev/',
    github: 'https://github.com/seantokuzo/portfolio',
    tagline: 'My portfolio on my portfolio?! Woooah, my brain',
    stack: ['react', 'react-router', 'sass', 'gsap']
  },
  {
    id: 6,
    name: 'Drum Machine',
    img: 'drum-machine-800sqr.png',
    link: 'https://seantokuzo.github.io/DER-PC3000/',
    github: 'https://github.com/seantokuzo/DER-PC3000',
    tagline:
      "This is the DER-PC3000, a mini drum machine pre-programmed with a tiny library of sounds and a few audio controls. Feel free to play around and don't worry, your browser will remember your kit and settings!",
    stack: ['react', 'css3', 'ableton']
  },
  {
    id: 7,
    name: 'Le Calculator',
    img: 'calculator-800sqr.png',
    link: 'https://seantokuzo.github.io/Calculator/',
    github: 'https://github.com/seantokuzo/Calculator',
    tagline:
      'A simple Javascript calculator with different color themes. Do some maths!',
    stack: ['react', 'css3']
  },
  {
    id: 8,
    name: 'Trivial Trivia',
    img: 'trivial-trivia-800sqr.png',
    link: 'https://trivial-trivia-seantokuzo.netlify.app/',
    github: 'https://github.com/seantokuzo/TrivialTrivia',
    tagline:
      "How much trivial knowledge do you possess? Probably more than me, but that's not sayin' much. Test your useless knowledge with Trivial Trivial",
    stack: ['react', 'css3']
  },
  {
    id: 9,
    name: 'Blackjack',
    img: 'blackjack-800sqr.png',
    link: 'https://seantokuzo.github.io/Blackjack/',
    github: 'https://github.com/seantokuzo/Blackjack',
    tagline:
      'A simple blackjack game made with vanilla JS. Play against an automated opponent. App powered by the Deck of Cards API',
    stack: ['html5', 'css3', 'javascript']
  }
]

export default projects
