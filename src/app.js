/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let emptyArray = [];
  for (let i in pronoun)
    for (let b in adj)
      for (let c in noun)
        emptyArray.push(pronoun[i] + adj[b] + noun[c] + ".com <br>");
  console.log(emptyArray);
  document.querySelector(".domains").innerHTML = emptyArray;
};
