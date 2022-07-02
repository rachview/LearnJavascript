//Message delivery, also playing with forms, if/else and manipulating classes in the HTML.

const btn = document.querySelector(".btn");
const messageBox = document.querySelector(".message");
const container = document.querySelector(".container-message");
const messageEl = document.querySelector(".message-el");
const form = document.getElementById("message-form");

form.addEventListener("submit", function (event) {
  //On event, stops the normal form behavior
  event.preventDefault();
});

btn.addEventListener("click", () => {
  //Check to see if "container-message_show is listed"
  if (container.classList.contains(".container-message_show")) {
    //Remove class
    container.classList.remove("container-message_show");
    //Clear element
    messageEl.textContent = "";
  } else {
    //Add class
    container.classList.add("container-message_show");
    //Remove class after 3 seconds.
    setTimeout(function () {
      container.classList.remove("container-message_show");
    }, 3000);
    //Run check to see if input field has message
    if (messageBox.value === "") {
      messageEl.textContent = "Please enter a message.";
    } else {
      messageEl.textContent = "Message Sent!";
    }
  }
});

//setTimer: https://www.freecodecamp.org/news/javascript-settimeout-js-timer-to-delay-n-seconds/
//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
//clearTimeout() clears setTimeout().
//Measured in milliseconds.

///5 secs
setTimeout(() => {
  console.log("this is the first message = 5 seconds");
}, 5000);
///3 secs
setTimeout(() => {
  console.log("this is the second message = 3 seconds");
}, 3000);
///1sec
setTimeout(() => {
  console.log("this is the third message = 1 second");
}, 1000);
//.5sec
setTimeout(() => {
  console.log("this is the fouth message = .5 of a second");
}, 500);
//.1sec
setTimeout(() => {
  console.log("this is the fifth message = .1 of a second");
}, 100);
