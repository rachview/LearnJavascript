const section = document.querySelector("section");
const subtitle = document.querySelector(".subtitle");
const innerText = document.querySelector(".section-title");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  section.style.clipPath = `circle(${value}px at center center)`;
  subtitle.style.left = 100 - value / 5 + "%";
  innerText.style.left = 100 - value / 5 + "%";
});
