//Playing with forEach loop, counters, and altering the HTML.

const numEl = document.querySelector(".num-el");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    //Assign styles to currently selected class (increase, decrease, clear)
    const styles = event.currentTarget.classList;
    //Check to see which btn click
    if (styles.contains("decrease")) {
      //Decrease
      count--;
    } else if (styles.contains("increase")) {
      //Increase
      count++;
    } else {
      //Zero out
      count = 0;
    }
    //Change styles
    if (count < 0) {
      numEl.style.color = "tomato";
    } else if (count > 0) {
      numEl.style.color = "mediumspringgreen";
    } else {
      numEl.style.color = "white";
    }
    //Change the number element to count
    numEl.textContent = count;
  });
});
