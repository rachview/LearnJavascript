//Coding with Nick

//vars
//"use strict";
//New way of declaring variables, never seen this before.
var testim = document.getElementById("testim"),
  //This is pulling it out of the HTML and slicing it up.
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer;

window.onload = function () {
  //Testim Script
  function playSlide(slide) {
    for (let k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }
    //If at beginning, go back around
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }
    //If at the end, go back around
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }
    //If slide is not currently displayed, make it inactive
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    //Otherwise make it active
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");
    //Currently active equals the current slide
    currentActive = currentSlide;
    //Clears the timer
    clearTimeout(testimTimer);
    //Automatically cycles through testimonials
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }
  testimLeftArrow.addEventListener("click", function () {
    //Play slide, going left (subtracts)
    playSlide((currentSlide -= 1));
  });
  testimRightArrow.addEventListener("click", function () {
    //Play slide, going right (adds)
    playSlide((currentSlide += 1));
  });

  //Loops through the dots as the testimonials progress
  for (let l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }
  //Calls the function with the current slide
  playSlide(currentSlide);
};
