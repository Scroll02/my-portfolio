// -----Tech Stack Data-----
import htmlImg from "./assets/images/html5.png";
import cssImg from "./assets/images/css.png";
import sassImg from "./assets/images/sass.png";
import bootstrapImg from "./assets/images/bootstrap.png";
import javascriptImg from "./assets/images/javascript.png";
import reactImg from "./assets/images/react.png";
import reduxImg from "./assets/images/redux.png";
import androidStudioImg from "./assets/images/android-studio.png";
import visualStudioCodeImg from "./assets/images/visual-studio.png";
import firebaseImg from "./assets/images/firebase.png";
import wordpressImg from "./assets/images/wordpress.png";
import postmanImg from "./assets/images/postman.png";
import paymongoImg from "./assets/images/paymongo.png";

export const techStackData = [
  { id: 1, imgSrc: htmlImg, alt: "HTML", title: "HTML" },

  { id: 2, imgSrc: cssImg, alt: "CSS", title: "CSS" },

  { id: 3, imgSrc: sassImg, alt: "Sass", title: "Sass" },

  { id: 4, imgSrc: bootstrapImg, alt: "Bootstrap", title: "Bootstrap" },

  { id: 5, imgSrc: javascriptImg, alt: "Javascript", title: "Javascript" },

  { id: 6, imgSrc: reactImg, alt: "React", title: "React" },

  { id: 7, imgSrc: reduxImg, alt: "Redux", title: "Redux" },

  { id: 8, imgSrc: firebaseImg, alt: "Firebase", title: "Firebase" },

  { id: 9, imgSrc: wordpressImg, alt: "Wordpress", title: "Wordpress" },

  { id: 10, imgSrc: postmanImg, alt: "Postman", title: "Postman" },

  {
    id: 11,
    imgSrc: androidStudioImg,
    alt: "Android Studio",
    title: "Android Studio",
  },

  {
    id: 12,
    imgSrc: visualStudioCodeImg,
    alt: "Visual Studio Code",
    title: "Visual Studio Code",
  },
];

// -----Projects Data-----
import homeWebImg from "./assets/images/home-web.jpg";
import dashboardImg from "./assets/images/dashboard.jpg";
import riderAppImg from "./assets/images/roseG-rider.png";

export const projectsData = [
  {
    id: 1,
    img: homeWebImg,
    alt: "Rose-G Website",
    title: "Rose-G Website",
    desc: "The Rose-G E-Commerce Website lets you effortlessly check out and order your preferred food. It's easy to use, safe for payments, and guarantees a smooth online ordering experience, delivering Rose-G's delicious offerings right to your door.",
    techStack: [reactImg, reduxImg, firebaseImg, cssImg, paymongoImg],
    btnTitle: "View",
    url: "https://rose-g-2537e.web.app/",
  },

  {
    id: 2,
    img: dashboardImg,
    alt: "Rose-G Admin",
    title: "Rose-G Admin",
    desc: "The Rose-G E-Commerce Admin is like the command center for the website. It helps the owner manage things, like updating the website and keeping track of user orders for the Rose-G E-Commerce Website.",
    techStack: [reactImg, reduxImg, firebaseImg, sassImg],
    btnTitle: "View",
    url: "https://rose-g-admin-7f049.web.app",
  },

  {
    id: 3,
    img: riderAppImg,
    alt: "Rose-G Driver",
    title: "Rose-G Driver App",
    desc: "The Rose-G Driver App helps Rose-G's delivery drivers by showing them important details about user orders. It includes everything from what to deliver to any special instructions, making sure drivers can deliver Rose-G orders smoothly.",
    techStack: [reactImg, reduxImg, firebaseImg, cssImg, androidStudioImg],
    btnTitle: "Download APK",
    url: "https://drive.google.com/file/d/1N3aPliScDDskWmVwg6JvJK72EXE1zgeD/view?usp=sharing",
  },
];
