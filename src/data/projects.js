const projects = [
  {
    id: 1,
    name: 'Walkabout Mini Golf Tournament',
    tagline:
      'A site hosting results and stats for the weekly Walkabout VR miniature golf tournament. Built with React and TypeScript and styled with TailwindCSS. Old results were converted from Google Sheets to JSON using Node.js. Includes customized views for individual players.',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/wmgt-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/wmgt-800sqr.png',
    link: 'https://walkabout-mini-golf-tournament-stats.netlify.app/',
    github: 'https://github.com/seantokuzo/wmgt',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    id: 2,
    name: 'Juicy Games',
    tagline:
      'A social gaming site where users can add friends and play games. The front end is built with React and styled using Sass. The backend was created with Node.js, Express and uses MongoDB. Uses SendGrid for email confirmation on signup and password changes',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/juicygames-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/juicygames-800sqr.png',
    link: 'https://juicy-games.onrender.com/',
    github: 'https://github.com/seantokuzo/wmgt',
    stack: ['React', 'JavaScript', 'Sass', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    name: 'Jordan Parker Music',
    tagline:
      'A website built for music artist Jordan Parker. It hosts info, music previews and other media as well as contact page to get in touch with the artist.',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/jpmusic-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/jpmusic-800sqr.png',
    link: 'https://jordanparkermusic.com/',
    github: 'https://github.com/seantokuzo/jordanparkermusic',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 4,
    name: 'Jobby Dobby',
    tagline:
      'A full stack web application for tracking and organizing job applications. The front end is built with React and vanilla JavaScript and is styled with CSS. The back end was made with Node.js, Express and uses MongoDB for the database. Includes full authorization and authentication using cookies. Demo the app using the Test User feature.',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/jobbydobby-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/jobbydobby-800sqr.png',
    link: 'https://jobby-dobby.onrender.com/',
    github: 'https://github.com/seantokuzo/jobby-dobby-final',
    stack: ['React', 'CSS3', 'Node.js', 'MongoDB'],
  },
  {
    id: 6,
    name: 'My Portfolio',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/portfolio-800sqr-light.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/portfolio-800sqr-dark.png',
    link: 'https://www.seantokuzo.dev/',
    github: 'https://github.com/seantokuzo/portfolio',
    tagline: 'My portfolio on my portfolio?! Woooah, my brain',
    stack: ['React', 'React Router', 'Sass', 'Green Sock Animation Platform'],
  },
  {
    id: 7,
    name: 'Natours',
    imgLight:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/natours-800sqr.png',
    imgDark:
      'https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/portfolio-img/project-images/natours-800sqr.png',
    link: 'https://natours-seantokuzo.herokuapp.com/',
    github: 'https://github.com/seantokuzo/StudyTimer',
    tagline: 'A fullstack mock e-commerce site for a tour company',
    stack: ['Node.js', 'MongoDB', 'Pug', 'Postman'],
  },
  // {
  //   id: 5,
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
  //   id: 3,
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
  //   id: 5,
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
  //   id: 6,
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
  //   id: 7,
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
  //   id: 8,
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
  //   id: 9,
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
