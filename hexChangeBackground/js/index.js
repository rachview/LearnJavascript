//Randomizing hexcode, and using a for loop.

const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const numEl = document.querySelector(".num-el");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
let hex = "#";

btn.addEventListener("click", function () {
  //For loop to gather 6 numbers (hex codes have 6 digits)
  for (let i = 0; i < 6; i++) {
    //Randomize numbers to pull from array
    //16 number/letters
    const index = Math.floor(Math.random() * hexValue.length);
    //console.log(index);
    //Apply random numbers to the "hex" value
    hex += hexValue[index];
  }
  //Apply the hex code to HTML
  body.style.backgroundColor = hex;
  numEl.textContent = hex;
  //Reset hex
  hex = "#";
});
