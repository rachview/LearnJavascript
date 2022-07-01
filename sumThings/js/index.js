//Learning how to add two input fields together.
const numOne = document.getElementById("num-one");
const numTwo = document.getElementById("num-two");
const btn = document.getElementById("btn");
const clear = document.getElementById("clr-btn");
const answer = document.getElementById("answer");
const invalidChars = ["-", "+", "e", "."];

//Prevent invaild characters
numOne.addEventListener("input", function () {
  numOne.value = numOne.value.replace(/[e\+\-\.]/gi, "");
});

numOne.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

numTwo.addEventListener("input", function () {
  numTwo.value = numTwo.value.replace(/[e\+\-\.]/gi, "");
});

numTwo.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

// //On btn click
btn.addEventListener("click", () => {
  //Check if fields are empty
  if (
    numOne.value == isNaN(numOne.value) ||
    numTwo.value == isNaN(numTwo.value)
  ) {
    answer.innerHTML = `<h2>Please enter the field(s)</h2>`;
  } else {
    answer.textContent = parseInt(numOne.value) + parseInt(numTwo.value);
  }
});

clear.addEventListener("click", () => {
  answer.textContent = 0;
  numOne.value = 0;
  numOne.innerHTML;
  numTwo.value = 0;
  numTwo.innerHTML;
});
