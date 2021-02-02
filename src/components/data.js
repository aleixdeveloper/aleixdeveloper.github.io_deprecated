import lichess from "../images/pages/lichess.png";
import fenok from "../images/pages/fenok.png";
/* import learn_english from '../images/pages/learn_english.png';
import metronome from '../images/pages/metronome.png'; */
import mobile from "../images/pages/mobile.png";
import roulette from "../images/pages/ruleta.png";
import ecommerce from "../images/pages/ecommerce.png";
import covid from "../images/pages/covid.png";
import fruits from "../images/pages/fruits.png";
import football from "../images/pages/football.png";

import lichess_icon from "../icons/lichess.png";
import lichess_icon_white from "../icons/lichess_white.png";
import fenok_icon from "../icons/fenok.png";
import fenok_icon_white from "../icons/fenok_white.png";
/* import learn_icon from '../icons/learn.png';
import learn_icon_white from '../icons/learn_white.png';
import metronome_icon from '../icons/metronome.png';
import metronome_icon_white from '../icons/metronome_white.png'; */
import mobile_icon from "../icons/mobile.png";
import mobile_icon_white from "../icons/mobile_white.png";
import roulette_icon from "../icons/roulette.png";
import roulette_icon_white from "../icons/roulette_white.png";
import ecommerce_icon from "../icons/ecommerce.png";
import ecommerce_icon_white from "../icons/ecommerce_white.png";
import covid_icon from "../icons/covid.png";
import covid_icon_white from "../icons/covid_white.png";
import fruits_icon from "../icons/fruits.png";
import fruits_icon_white from "../icons/fruits_white.png";
import football_icon from "../icons/football.png";
import football_icon_white from "../icons/football_white.png";

import react_icon from "../icons/tech/react.png";
import netlify_icon from "../icons/tech/netlify.png";
import chartjs_icon from "../icons/tech/chartjs.png";
import heroku_icon from "../icons/tech/heroku.png";
import jquery_icon from "../icons/tech/jquery.png";
import materialize_icon from "../icons/tech/materialize.png";
import materialui_icon from "../icons/tech/materialui.png";
import mongodb_icon from "../icons/tech/mongodb.png";
import mysql_icon from "../icons/tech/mysql.png";
import node_icon from "../icons/tech/nodejs.png";
import npm_icon from "../icons/tech/npm.png";
import php_icon from "../icons/tech/php.png";
import redux_icon from "../icons/tech/redux.png";
import wordpress_icon from "../icons/tech/wordpress.png";
import reactNative_icon from "../icons/tech/reactNative.png";
import expo_icon from "../icons/tech/expo.png";
import androidStudio_icon from "../icons/tech/androidStudio.png";
import express_icon from "../icons/tech/express.png";
import bootstrap_icon from "../icons/tech/bootstrap.png";
import gh_pages_icon from "../icons/tech/gh-pages.png";
/* import sass_icon from '../icons/tech/sass.png'; */
/* import git_icon from '../icons/tech/git.png';
import gulp_icon from '../icons/tech/gulp.png'; */

export const data = [
  {
    id: 1,
    name: "COVID-19 stats",
    img: covid,
    alt: "Covid-19 daily cases",
    text:
      "Select your town to get the daily cases of COVID-19. Suspicious and Positives by PCR.",
    icon: covid_icon,
    icon_white: covid_icon_white,
    url: "https://aleixdeveloper.github.io/analisi-covid",
    techIcons: [
      { id: "1", url: react_icon },
      { id: "19", url: bootstrap_icon },
      { id: "3", url: chartjs_icon },
    ],
  },
  {
    id: 2,
    name: "eCommerce Web App",
    img: ecommerce,
    alt: "eCommerce Web App",
    text:
      "An online shop to sell any kind of products you want. Manage orders, products and users from the admin control. Review system integrated",
    icon: ecommerce_icon,
    icon_white: ecommerce_icon_white,
    url: "https://venda-online.herokuapp.com",
    techIcons: [
      { id: "1", url: react_icon },
      { id: "10", url: node_icon },
      { id: "8", url: mongodb_icon },
      { id: "18", url: express_icon },
      { id: "13", url: redux_icon },
      { id: "19", url: bootstrap_icon },
      { id: "4", url: heroku_icon },
    ],
  },
  {
    id: 3,
    name: "Lichess",
    img: lichess,
    alt: "lichess",
    text:
      "Streaming interface of a chess match in real time. Powered by the Lichess API. It uses the PGN and FEN notation for moving the pieces on the chess board.",
    icon: lichess_icon,
    icon_white: lichess_icon_white,
    url: "https://aleixdeveloper.github.io/lichess-live-streaming",
    techIcons: [
      { id: "1", url: react_icon },
      { id: "10", url: node_icon },
      { id: "16", url: materialize_icon },
      { id: "11", url: npm_icon },
      { id: "2", url: netlify_icon },
    ],
  },
  {
    id: 4,
    name: "Fruit Season",
    img: fruits,
    alt: "fruits",
    text: "fruits by season",
    icon: fruits_icon,
    icon_white: fruits_icon_white,
    url: "https://aleixdev.com/glassmorphism-fruits",
    techIcons: [
      { id: "1", url: react_icon },
      { id: "15", url: reactNative_icon },
      { id: "4", url: heroku_icon },
    ],
  },
  {
    id: 5,
    name: "Security Mobile App",
    img: mobile,
    alt: "Security Mobile",
    text: "This app is in a building state yet.",
    icon: mobile_icon,
    icon_white: mobile_icon_white,
    url: "https://play.google.com/store",
    techIcons: [
      { id: "15", url: reactNative_icon },
      { id: "16", url: expo_icon },
      { id: "17", url: androidStudio_icon },
    ],
  },
  {
    id: 6,
    name: "Football - Fancy Standings",
    img: football,
    alt: "football",
    text:
      "Fancy football standings. All standings around are simple and ugly. These are pretty",
    icon: football_icon,
    icon_white: football_icon_white,
    url: "https://aleixdeveloper.github.io/football-react",
    techIcons: [
      { id: "1", url: react_icon },
      { id: "15", url: reactNative_icon },
      { id: "20", url: gh_pages_icon },
    ],
  },
  {
    id: 7,
    name: "Fenok",
    img: fenok,
    alt: "fenok",
    text:
      "Rock band website made with Wordpress, with some changes in the CSS and PHP code.",
    icon: fenok_icon,
    icon_white: fenok_icon_white,
    url: "https://aleixdev.com/projectes/wordpress",
    techIcons: [
      { id: "14", url: wordpress_icon },
      { id: "12", url: php_icon },
      { id: "9", url: mysql_icon },
      { id: "5", url: jquery_icon },
    ],
  },
  {
    id: 8,
    name: "Roulette Simulator",
    img: roulette,
    alt: "Roulette Simulator",
    text:
      "Find the winning chances of an european roulette by simulating multiple ball throwings in a very short time.",
    icon: roulette_icon,
    icon_white: roulette_icon_white,
    url: "https://aleixdeveloper.github.io/roulette-simulator",
    techIcons: [
      { id: "1", url: react_icon },
      { id: "10", url: node_icon },
      { id: "7", url: materialui_icon },
      { id: "3", url: chartjs_icon },
    ],
  },

  /*     {
            id: 5,
            name: 'Learn English',
            img: learn_english,
            alt: 'learn english',
            text: 'Improve your english or catalan by translating popular words in a three-level difficulty app.',
            icon: learn_icon,
            icon_white: learn_icon_white,
            url: 'https://aleixdev.com/projectes/learn',
            techIcons: [php_icon, mysql_icon, jquery_icon]
        }, */

  /*     {
            id: 8,
            name: 'Metronome',
            img: metronome,
            alt: 'metronome',
            text: 'Prepare the setlist for a band practice. You can set the tempo of each song and get the help of an acoustic and visual metronome.',
            icon: metronome_icon,
            icon_white: metronome_icon_white,
            url: 'https://aleixdev.com/projectes/metronome',
            techIcons: [php_icon, mysql_icon, jquery_icon]
        }, */
];
