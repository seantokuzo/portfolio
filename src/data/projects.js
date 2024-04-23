const projects = [
  {
    id: 1,
    name: 'Chronos',
    tagline:
      'A site hosting results and stats for the weekly Walkabout VR miniature golf tournament',
    imgLight:
      'https://media.licdn.com/dms/image/C4D0BAQGgx4OrPKp8bg/company-logo_200_200/0/1630551340376/chronosmd_logo?e=1721865600&v=beta&t=6gzbf3siaJZMOwwK3SzU_FZlaJlbPcHPEUKdkxlr5lo',
    imgDark:
      'https://media.licdn.com/dms/image/C4D0BAQGgx4OrPKp8bg/company-logo_200_200/0/1630551340376/chronosmd_logo?e=1721865600&v=beta&t=6gzbf3siaJZMOwwK3SzU_FZlaJlbPcHPEUKdkxlr5lo',
    link: 'https://chronoslany.com/',
    github: 'https://github.com/open-source-labs/Chronos',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Node.js'],
  },
  {
    id: 2,
    name: 'Walkabout Mini Golf Tournament',
    tagline:
      'A site hosting results and stats for the weekly Walkabout VR miniature golf tournament',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/wmgt-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/wmgt-800sqr.png',
    link: 'https://walkabout-mini-golf-tournament-stats.netlify.app/',
    github: 'https://github.com/seantokuzo/wmgt',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Node.js'],
  },
  {
    id: 3,
    name: 'Juicy Games',
    tagline: 'A social gaming site where users can add friends and play games',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/juicygames-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/juicygames-800sqr.png',
    link: 'https://juicy-games.onrender.com/',
    github: 'https://github.com/seantokuzo/wmgt',
    stack: ['React', 'JavaScript', 'Sass', 'Node.js', 'MongoDB'],
  },
  {
    id: 4,
    name: 'Jordan Parker Music',
    tagline:
      'A website built for music artist Jordan Parker hosting music previews and other media',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/jpmusic-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/jpmusic-800sqr.png',
    link: 'https://jordanparkermusic.com/',
    github: 'https://github.com/seantokuzo/jordanparkermusic',
    stack: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 5,
    name: 'Jobby Dobby',
    tagline:
      'A full stack web application for tracking and organizing job applications',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/jobbydobby-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/jobbydobby-800sqr.png',
    link: 'https://jobby-dobby.onrender.com/',
    github: 'https://github.com/seantokuzo/jobby-dobby-final',
    stack: ['React', 'CSS3', 'Node.js', 'MongoDB'],
  },
  // {
  //   id: 6,
  //   name: 'My Portfolio',
  //   imgLight:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/portfolio-800sqr-light.png',
  //   imgDark:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/portfolio-800sqr-dark.png',
  //   link: 'https://www.seantokuzo.dev/',
  //   github: 'https://github.com/seantokuzo/portfolio',
  //   tagline:
  //     'My personal portfolio to showcase my experience with web development',
  //   stack: ['React', 'React Router', 'Sass', 'Green Sock Animation Platform'],
  // },
  // {
  //   id: 7,
  //   name: 'Natours',
  //   imgLight:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/natours-800sqr.png',
  //   imgDark:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/natours-800sqr.png',
  //   link: 'https://natours-seantokuzo.herokuapp.com/',
  //   github: 'https://github.com/seantokuzo/StudyTimer',
  //   tagline: 'A fullstack mock e-commerce site for a tour company',
  //   stack: ['Node.js', 'MongoDB', 'Pug', 'Postman'],
  // },
  // {
  //   id: 8,
  //   name: 'Bobby Shmurdle',
  //   tagline: 'A Bobby Shmurda themed Wordle clone you can play forever',
  //   imgLight:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/bobby-800sqr-light.png',
  //   imgDark:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/bobby-800sqr-dark.png',
  //   link: 'https://bobby-shmurdle.netlify.app/',
  //   github: 'https://github.com/seantokuzo/bobby-shmurdle',
  //   stack: ['React', 'CSS3']
  // },
  // {
  //   id: 9,
  //   name: 'Movie Watchlist',
  //   imgLight:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/movie-watchlist-800sqr-light.png',
  //   imgDark:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/movie-watchlist-800sqr-dark.png',
  //   link: 'https://shmovie-watchlist.netlify.app/',
  //   github: 'https://github.com/seantokuzo/shmovie-watchlist',
  //   tagline:
  //     'Build your own movie watchlist. Powered by The Movie Database API',
  //   stack: ['React', 'CSS3']
  // },
  // {
  //   id: 10,
  //   name: 'Study Timer',
  //   imgLight:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/study-timer-800sqr.png',
  //   imgDark:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/study-timer-800sqr.png',
  //   link: 'https://study-timer-seantokuzo.netlify.app/',
  //   github: 'https://github.com/seantokuzo/StudyTimer',
  //   tagline: 'A nintendo themed study & break session timer.',
  //   stack: ['React', 'CSS3']
  // },
  // {
  //   id: 11,
  //   name: 'Le Calculator',
  //   imgLight:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/calculator-800sqr.png',
  //   imgDark:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/calculator-800sqr.png',
  //   link: 'https://seantokuzo.github.io/Calculator/',
  //   github: 'https://github.com/seantokuzo/Calculator',
  //   tagline:
  //     'A simple Javascript calculator with different color themes. Do some maths!',
  //   stack: ['React', 'CSS3']
  // },
  // {
  //   id: 12,
  //   name: 'Drum Machine',
  //   imgLight:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/drum-machine-800sqr.png',
  //   imgDark:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/drum-machine-800sqr.png',
  //   link: 'https://seantokuzo.github.io/DER-PC3000/',
  //   github: 'https://github.com/seantokuzo/DER-PC3000',
  //   tagline:
  //     'A mini drum machine with a tiny library of sounds and a few audio controls.',
  //   stack: ['React', 'CSS3', 'Ableton Live']
  // },
  // {
  //   id: 13,
  //   name: 'Trivial Trivia',
  //   imgLight:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/trivial-trivia-800sqr.png',
  //   imgDark:
  //     'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/trivial-trivia-800sqr.png',
  //   link: 'https://trivial-trivia-seantokuzo.netlify.app/',
  //   github: 'https://github.com/seantokuzo/TrivialTrivia',
  //   tagline: 'A trivia game to test your trivial knowledge',
  //   stack: ['React', 'CSS3']
  // }
  // {
  //   id: 14,
  //   name: 'Blackjack',
  //   imgLight: 'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/blackjack-800sqr.png',
  //   imgDark: 'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/blackjack-800sqr.png',
  //   link: 'https://seantokuzo.github.io/Blackjack/',
  //   github: 'https://github.com/seantokuzo/Blackjack',
  //   tagline:
  //     'A simple blackjack game powered by the Deck of Cards API. Play against an automated opponent',
  //   stack: ['html5', 'CSS3', 'javascript']
  // }
]

export default projects
