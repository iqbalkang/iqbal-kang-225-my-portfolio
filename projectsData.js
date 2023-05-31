export const projectsData = [
  //featured
  {
    name: 'atw',
    tagLine: 'Social Recommendation Networking Platform',
    image: './images/project-art/atw.png',
    belongsTo: 'fullstack',
    featured: true,
    pageLink: '',
    ownPage: true,
  },
  {
    name: 'movieous',
    tagLine: "Movie-Lover's Paradise of Information",
    image: './images/project-art/movieous.png',
    belongsTo: 'fullstack',
    featured: true,
    ownPage: true,
  },
  {
    name: 'synccart',
    tagLine: 'Vast, Online Marketplace Bonanza',
    image: './images/project-art/synccart.png',
    belongsTo: 'fullstack',
    featured: true,
    ownPage: true,
  },
  {
    name: 'caluri',
    tagLine: 'Track Your Health Journey Delightfully',
    image: './images/project-art/caluri.png',
    belongsTo: 'react',
    featured: true,
    ownPage: true,
  },
  {
    name: 'queezy',
    tagLine: 'Playful Education Adventure Awaits',
    image: './images/project-art/queezy.png',
    belongsTo: 'vanilla js',
    featured: true,
    ownPage: true,
  },
  {
    name: 'luxurify',
    tagLine: 'Furnish Your Home smartly',
    image: './images/project-art/luxurify.png',
    belongsTo: 'vanilla js',
    featured: true,
    ownPage: true,
  },
  {
    name: 'spentt',
    tagLine: 'Money Matters Simplified',
    image: './images/project-art/spentt.png',
    belongsTo: 'react',
    featured: true,
    ownPage: true,
  },
  {
    name: 'tohdo',
    tagLine: 'Task Ahead, Just Do It',
    image: './images/project-art/tohdo.png',
    belongsTo: 'vanilla js',
    featured: true,
    ownPage: true,
  },
  //
  {
    name: 'jobopia',
    tagLine: 'Organize Your Job Hunt',
    image: './images/project-art/jobopia.png',
    belongsTo: 'fullstack',
  },
  {
    name: 'aquazilla',
    tagLine: 'Hydrate Your Well-Being',
    image: './images/project-art/aquazilla.png',
    belongsTo: 'vanilla js',
    liveLink: 'https://iqbal-kang-225-aquazilla.vercel.app/',
  },
  {
    name: 'cryptourist',
    tagLine: 'Invest in Your Future',
    image: './images/project-art/cryptourist.png',
    belongsTo: 'react',
    liveLink: 'https://iqbal-kang-225-cryptourist.vercel.app/',
  },
  {
    name: 'newsium',
    tagLine: 'Stay informed, stay current',
    image: './images/project-art/newsium.png',
    belongsTo: 'react',
    liveLink: 'https://iqbal-kang-225-newsium24.vercel.app/',
  },
  {
    name: 'what the color',
    tagLine: 'Guess the Colors Mystery',
    image: './images/project-art/what-the-color.png',
    belongsTo: 'react',
    liveLink: 'https://iqbal-kang-225-what-the-color.vercel.app/',
  },
  {
    name: 'todo',
    tagLine: 'Get Organized with Ease',
    image: './images/project-art/todo.png',
    belongsTo: 'react',
    liveLink: 'https://iqbal-kang-225-what-the-color.vercel.app/',
  },
  {
    name: 'etch-a-sketch',
    tagLine: 'Color to Create Happiness',
    image: './images/project-art/etch-a-sketch.png',
    belongsTo: 'vanilla js',
    liveLink: 'https://iqbal-kang-225-etch-a-sketch.vercel.app/',
  },
  {
    name: 'calculator',
    tagLine: 'Explore Beyond Numbers',
    image: './images/project-art/calculator.png',
    belongsTo: 'vanilla js',
    liveLink: 'https://iqbal-kang-225-calculator.vercel.app/',
  },
  {
    name: 'dice-game',
    tagLine: 'Roll the Fun Dice',
    image: './images/project-art/dice-game.png',
    belongsTo: 'vanilla js',
    liveLink: 'https://iqbal-kang-225-dice-game.vercel.app/',
  },
];

export const singleProjectsData = [
  // atw
  {
    name: 'atw',
    description: [
      'Welcome to ATW, a modern and user-friendly website for discovering great places around the world to visit! Here you can find all the best destinations and attractions near or far so you can plan your next great adventure.',
      'At ATW, you can post reviews, ratings, comments on places and services, and connect with other travelers and share your own experiences. You can also follow other members and get their latest findings and recommendations. With ATW, you can easily build your personalized itinerary with restaurant, hotel, and attraction reviews, all in one place, and access it from anywhere.',
      'You can add posts to your favorites to build your very own gallery of favorite spots. You can comment, reply, and give thumbs up or react to reviews and posts. ATW sends live notifications for all of these events, so you stay updated and never miss out!',
      " Our easy-to-use interface allows you to easily log in and start engaging with the world around you. So get ready to explore! And don't forget to follow your friends and make new ones here at ATW. Join today and become part of the ATW revolution!",
    ],
    video: './images/atw/atwvideo.mp4',
    liveSite: '',
    colors: ['#ee7c78', '#444444', '#fcf1f2', '#ffffff'],
    fonts: [{ name: 'Josefin Sans', image: './images/montserratfont.png' }],
    stack: [
      {
        type: 'front end',
        tools: [
          { name: 'redux', image: '/images/redux.png' },
          { name: 'react', image: '/images/react.png' },
          { name: 'tailwind', image: '/images/tailwind.png' },
        ],
      },
      {
        type: 'back end',
        tools: [
          { name: 'postgresql', image: '/images/postgresql.png' },
          { name: 'express', image: '/images/express.png' },
          { name: 'node', image: '/images/node.png' },
        ],
      },
      {
        type: 'deployment',
        tools: [
          { name: 'nginx', image: '/images/nginx.png' },
          { name: 'aws', image: '/images/aws.png' },
          { name: 'github', image: '/images/github.png' },
        ],
      },
    ],
    highlights: [
      { highlight: 'user feedback platform', image: './images/atw/userfeedbackplatform.png' },
      { highlight: 'mapping exploration', image: './images/atw/mappingexploration.png' },
      { highlight: 'tag your posts', image: './images/atw/tagyourposts.png' },
      { highlight: 'real time notifications', image: './images/atw/realtimenotifications.png' },
      { highlight: 'intelligent suggestions', image: './images/atw/intelligentsuggestions.png' },
      { highlight: 'connect & grow', image: './images/atw/connect&grow.png' },
      { highlight: 'privacy personified', image: './images/atw/privacypersonified.png' },
      { highlight: 'hearts of fun', image: './images/atw/heartsoffun.png' },
      { highlight: 'follow restricted posts', image: './images/atw/followrestrictedposts.png' },
      { highlight: 'interactive comment reactions', image: './images/atw/interactivecommentreactions.png' },
      { highlight: 'tag team up', image: './images/atw/tagteamup.png' },
      { highlight: 'trackable connections', image: './images/atw/trackableconnections.png' },
      { highlight: 'interactive dialogue flow', image: './images/atw/interactivedialogueflow.png' },
    ],
    loginDetails: { email: 'johndoe@gmail.com', password: 'Welcome2dsite' },
  },

  // movieous
  {
    name: 'movieous',
    description: [
      'Welcome to the ultimate movie-lovers destination! Movieous is a perfect stop for all your movie needs. Whether you’re a passionate cinephile, or just someone who likes to relax after a long day with a good movie, our website is just what you need to stay ahead.',
      "We feature the most comprehensive and up-to-date database of filmographies spanning classic Hollywood to today's biggest blockbusters from around the globe. With user ratings, reviews and now showing and coming soon information, this is the perfect place for you to find out all you need to know about movies. With detailed reviews from savvy movie lovers like yourself, you'll never miss another gem or a forgettable flop.",
      'So explore your passion for cinema and browse our library right away!',
    ],
    video: './images/movieous/movieousvideo.mp4',
    liveSite: '',
    colors: [
      '#0e1428',
      '#ffffff',
      '#823038',
      '#fcd757',
      '#e06c9f',
      '#555555',
      '#101419',
      '#dddddd',
      '#ef4444',
      '#5ec268',
    ],
    fonts: [{ name: 'roboto', image: './images/montserratfont.png' }],
    stack: [
      {
        type: 'front end',
        tools: [
          { name: 'react', image: '/images/react.png' },
          { name: 'javascript', image: '/images/javascript.png' },
          { name: 'tailwind', image: '/images/tailwind.png' },
        ],
      },
      {
        type: 'back end',
        tools: [
          { name: 'mongodb', image: '/images/mongodb.png' },
          { name: 'express', image: '/images/express.png' },
          { name: 'node', image: '/images/node.png' },
        ],
      },
      {
        type: 'deployment',
        tools: [
          { name: 'nginx', image: '/images/nginx.png' },
          { name: 'aws', image: '/images/aws.png' },
          { name: 'github', image: '/images/github.png' },
        ],
      },
    ],
    highlights: [
      { highlight: 'Watch Movie Previews', image: './images/movieous/watchmoviepreviews.png' },
      { highlight: 'Secure User Verification', image: './images/movieous/secureuserverification.png' },
      { highlight: 'Recover forgotten passwords', image: './images/movieous/recoverforgottenpasswords.png' },
      { highlight: 'Toggleable Themes', image: './images/movieous/toggleablethemes.png' },
      { highlight: 'Smart Browse Recommendations', image: './images/movieous/smartbrowserecommendations.png' },
      { highlight: 'Interactive Critiques', image: './images/movieous/interactivecritiques.png' },
      { highlight: 'Admin Domain Portal', image: './images/movieous/admindomainportal.png' },
      { highlight: 'Background Video Processing', image: './images/movieous/backgroundvideoprocessing.png' },
      { highlight: 'Dynamic Form Filling', image: './images/movieous/dynamicformfilling.png' },
      { highlight: 'Easy Data Entry', image: './images/movieous/easydataentry.png' },
      { highlight: 'Insights Before Submit', image: './images/movieous/insightsbeforesubmit.png' },
    ],
    loginDetails: { email: 'johndoe@gmail.com', password: 'Welcome2dsite' },
  },

  // synccart
  {
    name: 'synccart',
    description: [
      'Ready to fuel your body with the best supplements out there? Synccart is here to help! It is an one-stop shop for all things supplements! As the premier online store for supplements, we at SyncCart make it our mission to provide our customers with the best products and services in the market.',
      'Our selection of supplements is unrivaled, with something for everyone. Whether you’re looking for energy-boosting pre-workouts, hair growth vitamins, or anything else in the supplement realm, you can count on us to have it. Our products are sourced from the top brands in the industry, so you can feel safe knowing that all our products are of the highest quality and meet FDA standards.',
      'Not only do we offer a great selection and top quality, but our prices are unbeatable as well! Let us be your one-stop-shop for healthy and safe supplements.',
      'Start shopping your way to a healthier you with SyncCart today!',
    ],
    video: './images/synccart/synccartvideo.mp4',
    liveSite: '',
    colors: ['#ffffff', '#000000', '#bfdbfe', '#ef4444', '#7f7f7f', '#ebb305'],
    fonts: [{ name: 'roboto', image: './images/montserratfont.png' }],
    stack: [
      {
        type: 'front end',
        tools: [
          { name: 'redux', image: '/images/redux.png' },
          { name: 'react', image: '/images/react.png' },
          { name: 'tailwind', image: '/images/tailwind.png' },
        ],
      },
      {
        type: 'back end',
        tools: [
          { name: 'mysql', image: '/images/mysql.png' },
          { name: 'express', image: '/images/express.png' },
          { name: 'node', image: '/images/node.png' },
        ],
      },
      {
        type: 'deployment',
        tools: [
          { name: 'nginx', image: '/images/nginx.png' },
          { name: 'aws', image: '/images/aws.png' },
          { name: 'github', image: '/images/github.png' },
        ],
      },
    ],
    highlights: [
      { highlight: 'customer feedback', image: './images/synccart/customerfeedback.png' },
      { highlight: 'stock controlled shopping', image: './images/synccart/stockcontrolledshopping.png' },
      { highlight: 'product ratings insight', image: './images/synccart/productratingsinsight.png' },
      { highlight: 'stock safeguard', image: './images/synccart/stocksafeguard.png' },
      { highlight: 'address autosave and populate', image: './images/synccart/addressautosaveandpopulate.png' },
      { highlight: 'retain shopping cart', image: './images/synccart/retainshoppingcart.png' },
      { highlight: 'admin control panel', image: './images/synccart/admincontrolpanel.png' },
      { highlight: 'manage product inventory', image: './images/synccart/manageproductinventory.png' },
      { highlight: 'elevate user privileges', image: './images/synccart/elevateprivileges.png' },
    ],
    loginDetails: { email: 'johndoe@gmail.com', password: 'Welcome2dsite' },
  },

  // caluri
  {
    name: 'caluri',
    description: [
      'Are you looking for a comprehensive and reliable system to help with your fitness and nutrition goals?',
      'Look no further - Caluri provides the perfect platform to help you monitor and achieve your health and wellbeing milestones. It is an online nutrients and calorie counter designed to help you reach your optimal level of nutritional balance. Whether you’re a seasoned gym-goer or just getting started, Caluri can help you create sustainable and realistic goals that you can achieve within no time.',
      'With Caluri, you have the tools to fuel your life and your fitness goals! Our nutrition calculator and tracker make it easy to understand the effects of your dietary decisions.',
      'With our revolutionary calorie tracking website, you’ll be able to easily monitor your daily diet, set goals, and see improvements with just a few clicks. Our extensive database of foods and their nutrition values makes it easy for you to track your calories and nutrients, so you can make smarter decisions about what you eat and when.',
      'Say goodbye to complicated charts and fad diets - let Caluri guide you to smarter eating and a healthier you. Join us today!',
    ],
    video: './images/caluri/calurivideo.mp4',
    liveSite: '',
    colors: [
      '#001c06',
      '#ef4444',
      '#000000',
      '#ffffff',
      '#22c55d',
      '#ebb305',
      '#044389',
      '#f77316',
      '#662e9a',
      '#d40c7b',
    ],
    fonts: [{ name: 'poppins', image: './images/montserratfont.png' }],
    stack: [
      {
        type: 'front end',
        tools: [
          { name: 'redux', image: '/images/redux.png' },
          { name: 'react', image: '/images/react.png' },
          { name: 'tailwind', image: '/images/tailwind.png' },
        ],
      },
      {
        type: 'deployment',
        tools: [
          { name: 'netlify', image: '/images/netlify.png' },
          { name: 'vercel', image: '/images/vercel.png' },
          { name: 'github', image: '/images/github.png' },
        ],
      },
    ],
    highlights: [
      { highlight: 'personalized tracking', image: './images/caluri/personalizedtracking.png' },
      { highlight: 'track macros', image: './images/caluri/trackmacros.png' },
      { highlight: 'group meals', image: './images/caluri/groupmeals.png' },
      { highlight: 'update info', image: './images/caluri/updateinfo.png' },
    ],
  },

  // spentt
  {
    name: 'spentt',
    description: [
      'Did you know that one in three adults in the US have nothing saved for retirement?',
      "We get it. Managing your investments and expenses can be intimidating - tracking every single purchase and penny earned isn't easy. That's why we've created Spentt - the place where finances finally make sense.",
      'Spentt is an online personal finance tracker that makes managing and tracking your expenses and investments simple and stress-free. With Spentt, we want to help you become one of many who can confidently say that you are on top of your finances.',
      "With our state-of-the-art tracking system, you'll be able to monitor and manage all of your spending and investment activities in one convenient place. No more need to switch between multiple accounts or applications to get a complete financial overview. Using Spentt, you'll have everything you need to make informed financial decisions and start building wealth.",
      "With our revolutionary expense tracker, you'll have complete peace of mind knowing exactly when you're spending and investing - and finally, reaching your financial goals. Join spentt, get the most out of every penny and start your financial journey today!",
    ],
    video: './images/spentt/spenttvideo.mp4',
    liveSite: '',
    colors: ['#ecdcfa', '#271d30', '#88838e', '#ffffff', '#faff7f', '#c617d6', '#1626b5'],
    fonts: [{ name: 'poppins', image: './images/montserratfont.png' }],
    stack: [
      {
        type: 'front end',
        tools: [
          { name: 'redux', image: '/images/redux.png' },
          { name: 'javascript', image: '/images/javascript.png' },
          { name: 'tailwind', image: '/images/tailwind.png' },
        ],
      },
      {
        type: 'deployment',
        tools: [
          { name: 'netlify', image: '/images/netlify.png' },
          { name: 'vercel', image: '/images/vercel.png' },
          { name: 'github', image: '/images/github.png' },
        ],
      },
    ],
    highlights: [
      { highlight: 'Low Balance Alerts', image: './images/spentt/lowbalancealerts.png' },
      { highlight: 'Live Asset Pricing', image: './images/spentt/liveassetpricing.png' },
      { highlight: 'Manage Financial Groups', image: './images/spentt/managefinancialgroups.png' },
      { highlight: 'Insightful Investment Gains', image: './images/spentt/insightfulinvestmentgains.png' },
      { highlight: 'Crunching Loss Data', image: './images/spentt/crunchinglossdata.png' },
    ],
  },

  // queezy
  {
    name: 'queezy',
    description: [
      "Welcome to Queezy – the ultimate destination for quizzers! Here you can find a wide variety of exciting quizzes to play, or if you're feeling creative, you can even create your own! Our platform is designed to be intuitive and easy to use, so you can get playing and creating in no time. With an array of colorful and eye-catching graphics, inviting avatars, fun animations and sounds, Queezy will make sure you have a great time",
      "Whether you're a quiz enthusiast, a trivia buff, or just looking to kill some time, Queezy has the perfect quiz for you. So what are you waiting for? Join the Queezy community to test your knowledge, and prove that you can be a master of random trivia.",
      'So, don’t delay, get queazeying!',
    ],
    video: '/images/queezy/queezyvideo.mp4',
    liveSite: '',
    colors: ['#fd0200', '#f3a13c', '#0542b8', '#136a04', '#000000', '#ffffff'],
    fonts: [{ name: 'montserrat', image: './images/montserratfont.png' }],
    stack: [
      {
        type: 'front end',
        tools: [
          { name: 'javascript', image: '/images/javascript.png' },
          { name: 'css', image: '/images/css.png' },
          { name: 'html', image: '/images/html.png' },
        ],
      },
      {
        type: 'deployment',
        tools: [
          { name: 'vercel', image: '/images/vercel.png' },
          { name: 'netlify', image: '/images/netlify.png' },
          { name: 'github', image: '/images/github.png' },
        ],
      },
    ],
    highlights: [
      { highlight: 'create or play', image: './images/queezy/createorplay.png' },
      { highlight: 'Points Allocation System', image: './images/queezy/pointsallocationsystem.png' },
      { highlight: 'Timed Challenge', image: './images/queezy/timedchallenge.png' },
      { highlight: 'True/false questions', image: './images/queezy/truefalse.png' },
      { highlight: 'MCQ questions', image: './images/queezy/mcq.png' },
      { highlight: 'Explore Quizzes', image: './images/queezy/explorequizzes.png' },
      { highlight: 'Dynamic Leaderboard', image: './images/queezy/dynamicleaderboard.png' },
    ],
  },

  // tohdo
  {
    name: 'tohdo',
    description: [
      'We understand that life may not always be stress free, but with Tohdo organizing your day to day tasks has never been easier.',
      "Welcome to Tohdo – the smarter home for all your tasks. It's the one place where you can organise and manage every task you need to do. Whether you're planning a big project, keeping track of small errands or staying focused on your goals, we make it easy to quickly create and manage your to-dos.",
      "With our interactive, user-friendly platform, you can easily set priorities and categorize your to-dos, so that you're never overwhelmed by the overwhelm. Using Tohdo, you can keep track of personal, educational, and work tasks, so you never miss an important deadline or event. Our system helps eliminate clutter, so that you have the necessary focus to accomplish your goals.",
      'Using Tohdo you can safely say goodbye to lost notes and lists.',
      " Don't wait, take back control of your daily productivity and get organized with Tohdo, so you can seize the moment and get things done – without the stress.",
    ],
    video: '/images/tohdo/tohdovideo.mp4',
    liveSite: '',
    colors: ['#330033', '#ffffff', '#000000', '#bc1119', '#a3892e', '#678c2a'],
    fonts: [{ name: 'poppins', image: './images/montserratfont.png' }],
    stack: [
      {
        type: 'front end',
        tools: [
          { name: 'javascript', image: '/images/javascript.png' },
          { name: 'css', image: '/images/css.png' },
          { name: 'html', image: '/images/html.png' },
        ],
      },
      {
        type: 'deployment',
        tools: [
          { name: 'vercel', image: '/images/vercel.png' },
          { name: 'netlify', image: '/images/netlify.png' },
          { name: 'github', image: '/images/github.png' },
        ],
      },
    ],
    highlights: [
      { highlight: 'Cross-Group Visibility', image: './images/tohdo/crossgroupvisibility.png' },
      { highlight: 'Organize todos', image: './images/tohdo/organizetodos.png' },
      { highlight: 'Organize Tasks Priorities', image: './images/tohdo/organizetaskspriorities.png' },
      { highlight: 'Track completed tasks', image: './images/tohdo/trackcompletedtasks.png' },
      { highlight: 'customize todo grouping', image: './images/tohdo/customizetodogrouping.png' },
    ],
  },

  //luxurify
  {
    name: 'luxurify',
    description: [
      'Are you looking to spruce up your living space and give your home a makeover?',
      'Luxurify is here to make it possible. We are an online store that specializes in furniture, so that you can find the perfect pieces to bring your dream home to life. As the name suggests, Luxurify offers exclusive, luxurious furniture - perfect for decorating your home or workplace with unique pieces.',
      'With our vast selection of items from sofas to desks, we are sure to have something that will perfectly fit your lifestyle. Whether you are looking to update your living room with a new couch, or want to spruce up your workspace with an executive chair, Luxurify has just what you need. We only source top of the line pieces from the leading manufacturers, so you can be sure that your new furniture will stand the test of time.',
      'Browse through our extensive selection of products and find the perfect piece for your desired space and create an individual look that will turn heads. Experience the luxury of Luxurify today and make your house the envy of the street!',
    ],
    video: '/images/luxurify/luxurifyvideo.mp4',
    liveSite: '',
    colors: ['#feeab9', '#700000', '#ffffff', '#da0612', '#5f4201'],
    fonts: [
      { name: 'poppins', image: './images/montserratfont.png' },
      { name: 'Cinzel Decorative', image: './images/montserratfont.png' },
    ],
    stack: [
      {
        type: 'front end',
        tools: [
          { name: 'javascript', image: '/images/javascript.png' },
          { name: 'css', image: '/images/css.png' },
          { name: 'html', image: '/images/html.png' },
        ],
      },
      {
        type: 'deployment',
        tools: [
          { name: 'vercel', image: '/images/vercel.png' },
          { name: 'netlify', image: '/images/netlify.png' },
          { name: 'github', image: '/images/github.png' },
        ],
      },
    ],
    highlights: [
      { highlight: 'Filterable Product Search', image: './images/luxurify/filterableproductsearch.png' },
      { highlight: 'Retain Shopping Cart', image: './images/luxurify/retainshoppingcart.png' },
      { highlight: 'Showcase Selection', image: './images/luxurify/showcaseselection.png' },
    ],
  },
];
