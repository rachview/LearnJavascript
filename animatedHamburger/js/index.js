let menuToggle = document.querySelector(".toggle");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
};

// The onclick event generally occurs when the user clicks on an element. It allows the programmer to execute a JavaScript's function when an element gets clicked. This event can be used for validating a form, warning messages and many more.
//From: https://www.javatpoint.com/javascript-onclick-event
//Also see: https://www.w3schools.com/jsref/event_onclick.asp

let menu = document.querySelector(".menu");

menu.onclick = function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menu.innerHTML = "Close";
  } else {
    menu.innerHTML = "Menu";
  }
};
