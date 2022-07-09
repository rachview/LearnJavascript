//From TechStacker: https://www.youtube.com/watch?v=wX0pb6CBS-c

// Select element with box class, assign to box variable

// Detect all clicks on the document
document.addEventListener("click", function (event) {
  // If user clicks inside the element, do nothing
  if (event.target.closest(".box")) {
    //stop the function from running more code
    return;
  }
  // If user clicks outside the element, hide it!
  box.classList.add("js-is-hidden");
});
