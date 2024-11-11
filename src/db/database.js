import campoMinato from '../assets/campo-minato.jpg'
import gsp from '../assets/gsp.png'
import manica from "../assets/manica.png"
import rickMorty from '../assets/rick-morty.jpg'
import bdBack from '../assets/bd-back.jpg'
import bdFront from '../assets/bd-front.jpg'
// import avadaBurger from '../assets/avada-burger.jpg'

export const projects = [
   {
      "title": 'GSP lizzana',
      "description": 'Main site of Gsp lizzana calcio splash. find matches, events and more',
      "technologies":  ['Html', 'Tailwind', 'Next.js'],
      "href" : 'https://gsplizzana.it/',
      "github" : false,
      "imgPath" : gsp
   },
   {
      "title": 'Studio Manica',
      "description": '',
      "technologies":  ['Html', 'Tailwind', 'Laravel'],
      "href" : 'https://studiomanica.com/',
      "github" : false,
      "imgPath" : manica
   },
   {
      "title": 'Campo Minato - Click and Play',
      "description": 'Select the level and press the smile face to start playing.',
      "technologies":  ['Html', 'Css', 'Javascript'],
      "href" : 'https://lg-campo-minato.netlify.app/',
      "github" : 'https://github.com/Leograzioli/campominato-2.0',
      "imgPath" : campoMinato
   },
   // {
   //    "title": 'Avada Burger Landing Page',
   //    "description": 'landing page from a burger place with dynamic content.',
   //    "technologies":  ['Html', 'Css', 'Sass', "Javascript", 'Vue.js'],
   //    "href" : 'https://avada-burger.netlify.app/',
   //    "github" : 'https://github.com/Leograzioli/proj-html-vuejs',
   //    "imgPath" : avadaBurger
   // },
   {
      "title": 'Rick and Morty API',
      "description": 'A simple layout that prints all characters from rick and morty.',
      "technologies":  ['Html', 'Css', 'Bootstrap', 'Vue.js'],
      "href" : 'https://lg-rick-morty.netlify.app',
      "github" : 'https://github.com/Leograzioli/rick-marty-api',
      "imgPath" : rickMorty
   },
   {
      "title": 'B-doctors Back-office',
      "description": 'Back-Office (dashboard) of a profile from a medical social media. made in a team of 5',
      "technologies":  ['Php', 'Laravel', 'Css ', ' Sass', 'Bootstrap'],
      "href" : false,
      "github" : 'https://github.com/Anatoliegit88/B-Doctors',
      "imgPath" : bdBack
   },
   {
      "title": 'B-doctors Front-office',
      "description": 'A social media to find Doctors or resgister yourself as a Doctor. made in a team of 5',
      "technologies":  ['Html', 'Css', 'Sass', 'Bootstrap', 'vue.js'],
      "href" : false,
      "github" : 'https://github.com/FRA2721/b-doctors-vite',
      "imgPath" : bdFront
   },
]