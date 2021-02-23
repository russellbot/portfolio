export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Russell Hart',
    headline: 'About Me',
    description1: 'I am an aspiring web developer that is driven to create responsive web applications that meet customer needs. I enjoy learning new technologies and creating readable and efficient code.',
    description2: 'My technical skills are supplemented by my engineering and mathematics degrees and by my experience teaching engineering fundamentals to high school students. I also have extensive customer service experience from guiding with Nantahala Outdoor Center for many years.',
    buttons: [
        { name: 'Resume', link: require('../../resume/russell-hart-resume.pdf').default}
    ],
    imgStart: false,
    img: require('../../images/headshot4.jpg').default,
    alt: 'Russell Hart Picture',
    dark: false,
    primary: false,
    darkText: true
};

export const ezShop = {
    id: 'ezshop',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Full Stack App',
    headline: 'EZ-Shop',
    description1: 'This is an ecommerce app for use as an online store. This mobile front end application was built with the React-Native framework in conjunction with some elements from Native-Base. This site works in tandem with a backend that I built using Node.js, Express, and MondgoDB.',
    description2: 'Clients may browse items by category, use the search bar, add items to their cart, and checkout using their address and payment information. Users may view their profile information and order status on their profile tab. Users with admin access may use the administrator tab where they can add or remove items in the store, make new categories, and manage orders made by other users.',
    buttons: [
        { name: 'See Project', link: 'https://russellbot.github.io/eshop-frontend/'},
        { name: 'Frontend', link: 'https://github.com/russellbot/eshop-frontend', icon: true},
        { name: 'Backend', link: 'https://github.com/russellbot/eshop-backend', icon: true}
    ],
    imgStart: true,
    img: require('../../images/ezshop.png').default,
    alt: 'ezshop picture',
    dark: false,
    primary: false,
    darkText: true
};

export const smartFace = {
    id: 'smartface',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Full Stack App',
    headline: 'Smart Face',
    description1: 'This web app will find the faces on an image URL and draw boxes around each face in the picture. The app has full sign in and register functionality to build a user profile.',
    description2: 'The front end of this web app was built using the React framework. The server was built using Node and Express. Profiles and login information are stored in a PostgreSQL database and may be updated and changed. JSON Web Tokens and Redis are used for session management. The back end uses the Docker platform for easier development.',
    buttons: [
        { name: 'See Project', link: 'https://smart-face-react.herokuapp.com/'},
        { name: 'Frontend', link: 'https://github.com/russellbot/smart-face', icon: true},
        { name: 'Backend', link: 'https://github.com/russellbot/smart-face-api', icon: true}
    ],
    imgStart: false,
    img: require('../../images/smartface.PNG').default,
    alt: 'smartface picture',
    dark: true,
    primary: true,
    darkText: false
};

export const nasaPix = {
    id: 'nasapix',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Front End App',
    headline: 'Nasa Pix',
    description1: 'This application was built with the React framework in conjunction with Redux to manage the state. This site will load ten random pictures with descriptions from the NASA API. A seachbox will filter through pictures and highlight keywords in the picture title, description, and copyright. Pictures may be added to a favorites page that is stored in local storage.',
    description2: '',
    buttons: [
        { name: 'See Project', link: 'https://russellbot.github.io/nasa-pix/'},
        { name: 'Github', link: 'https://github.com/russellbot/nasa-pix', icon: true}
    ],
    imgStart: true,
    img: require('../../images/nasapix.PNG').default,
    alt: 'ezshop picture',
    dark: false,
    primary: false,
    darkText: true
};

export const paintClone = {
    id: 'paintclone',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Javascript Project',
    headline: 'MS Paint Clone',
    description1: 'This website mimics the functions of Microsoft Paint. The program was built using Javascript and HTML Canvas. Buttons allow pictures to be saved and loaded in localStorage. A copy of the picture may be downloaded as a jpeg.',
    description2: '',
    buttons: [
        { name: 'See Project', link: 'https://russellbot.github.io/paint-clone/'},
        { name: 'Github', link: 'https://github.com/russellbot/paint-clone', icon: true}
    ],
    imgStart: false,
    img: require('../../images/paintclone.PNG').default,
    alt: 'paint picture',
    dark: true,
    primary: true,
    darkText: false
};

export const starWars = {
    id: 'starwars',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Front End App',
    headline: 'Star Wars Movie Search',
    description1: 'This web app will show a searchable list of ten Star Wars movies that are pulled from the star wars API. The React framework was used with Redux in this app to manage state. Redux-thunk and redux-logger middleware was used for developement. JEST was used for testing in this application.',
    description2: '',
    buttons: [
        { name: 'See Project', link: 'https://russellbot.github.io/moviesearch/'},
        { name: 'Github', link: 'https://github.com/russellbot/moviesearch', icon: true}
    ],
    imgStart: true,
    img: require('../../images/starwars.PNG').default,
    alt: 'ezshop picture',
    dark: false,
    primary: false,
    darkText: true
};