/* /* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  //palos
  let arrayFeed = ["\u2660", "\u2663", "\u2665", "\u2666"];
  function numRandom() {
    return Math.floor(Math.random() * arrayFeed.length);
  }
  let newRandom = arrayFeed[numRandom()];
  let feed = document.querySelector("#feedOne");
  feed.innerHTML = newRandom;

  let feedSecond = document.querySelector("#feedTwo");
  feedSecond.innerHTML = newRandom;

  //valor de las cartas
  let value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  function getRandom() {
    return Math.floor(Math.random() * value.length);
  }
  let suit = document.querySelector("#typeLetter");
  suit.innerHTML = value[getRandom()];

  // Cambio de color
  if (newRandom == "\u2665" || newRandom == "\u2666") {
    feed.style.color = "red";
    feedSecond.style.color = "red";
  }
};
