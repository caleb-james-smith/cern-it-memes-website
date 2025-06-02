// print to verify that script loaded...
console.log("script.js loaded successfully... party time!");

// counter and button elements
const counter   = document.getElementById("counter");
const button    = document.getElementById("increment-button");

let count = 1;

// add event listener to the button
button.addEventListener("click", () => {
    // count += 1;
    count *= 2;
    counter.textContent = count;
});
