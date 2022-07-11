const skewed = document.querySelector(".skewed");

window.addEventListener("scroll", function () {
  //let value = -10 (starting deg) + window.scrollY / 60 (settle it down);
  let value = -10 + window.scrollY / 60;
  console.log(value);
  skewed.style.transform = `skewY(${value}deg)`;
});
