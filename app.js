"use strict";
// Selectors
const btn = document.querySelector("#btn");
const motiv = document.querySelector("#motiv");

// Event Listeners
btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((data) => (motiv.textContent = data.slip.advice));
  });
  
 