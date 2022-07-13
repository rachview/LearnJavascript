// From Tyler Potts: https://www.youtube.com/watch?v=eJIHT0cENR0
const costInput = document.querySelector(".cost");
const serviceInput = document.querySelector(".service");
const peopleInput = document.querySelector(".people");
const tipBtn = document.querySelector("#tip-btn");

tipBtn.addEventListener("click", calc_tip);

function calc_tip() {
  //Number converts strings into numbers
  let cost = Number(costInput.value);
  //Divide it by 100 to get %: 30 / 100 = 0.3
  let service = Number(serviceInput.value) / 100;
  let people = Number(peopleInput.value);
  let tip = (cost * service) / people;

  let tipEl = document.querySelector(".tip-wrap .tip");
  //ToFix keeps it from going beyond two decimals places.
  //Ternary Operator: Same as saying if(people > 1){ do this}else{ do that}
  tipEl.innerText = "$" + tip.toFixed(2) + (people > 1 ? " each" : "");
}
