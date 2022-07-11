//Adjusting the chevron to skew with the scrolling of the page.

const skewOne = document.querySelector(".skewed-one");
const skewTwo = document.querySelector(".skewed-two");

window.addEventListener("scroll", function () {
  //Adjusts the chevron to move
  const valueOne = -15 + window.scrollY / 45;
  const valueTwo = 15 + window.scrollY / -45;
  skewOne.style.transform = `skewY(${valueOne}deg)`;
  skewTwo.style.transform = `skewY(${valueTwo}deg)`;
});
