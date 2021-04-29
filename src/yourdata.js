// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

// Images
import profilePic from "./images/profile.jpg"
import GameOfLife from "./images/gol.png"
import Tally from "./images/tallyAI.png"
import cTracker from "./images/ctracker.png"
import Firebase from "./images/firebase.png"
export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Michael Phelps",
  headerTagline: [
    //Line 1 For Header
    "Full Stack",
    //Line 2 For Header
    "Web",
    //Line 3 For Header
    "Developer",
  ],
  //   Header Paragraph
  headerParagraph:
    "I create responsive, functional web applications for today's needs.",

  //Contact Email
  contactEmail: "mike@phelpsweb.dev",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Tally AI - Front End", //Project Title - Add Your Project Title Here
      para:
        "TallyAI is an innovataive tool for business owners to see how they stack up against the competition.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: Tally,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mphelps1978/tally-ai-fe",
    },
    {
      title: "Tally AI - Back End", //Project Title - Add Your Project Title Here
      para:
        "What tool would be useful without an API that leverages all the data into one package?", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: Tally,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mphelps1978/tally-ai-be",
    },
    {
      title: "Social Clone - Functions API", //Project Title - Add Your Project Title Here
      para:
        "A simple social networking API built in Firebase Functions", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: Firebase,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mphelps1978/social-clone-functions",
    },
    {
      title: "The Game of Life", //Project Title - Add Your Project Title Here
      para:
        "A senior project at Lambda School - Simulation of Cellular Automata or \"when a cell lives, another dies \" ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: GameOfLife,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mphelps1978/game-of-life",
    },
    {
      title: "Corona Tracker", //Project Title - Add Your Project Title Here
      para:
        "Track trends of the CoronaVirus globally", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: cTracker,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/mphelps1978/pf-project-corona-tracker",
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am a full stack web developer specializing in JavaScript, React, Redux, NodeJS, Express, and PostgreSQL. I recently graduated from Lambda School, where I obtained a certificate, and career endorsement in Full Stack Development.",
  aboutParaTwo:
    "I currently reside in SouthEast Iowa, where I live with my Fiancee and three wonderful children. In my spare time, I enjoy learning new technologies, simulation-style gaming, and eSports.",
  aboutParaThree:
    "",
  aboutImage: profilePic,


  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "",
    },
    {
      img: cssIcon,
      para:
        "",
    },
    {
      img: jsIcon,
      para:
        "",
    },
    {
      img: reactIcon,
      para:
        "",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "",
  promotionPara:
    "",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let me show you what I can do",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "mphelps1978" },

  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
