const section = document.querySelector("section");

window.addEventListener("scroll", function () {
  const value = window.scrollY;
  section.style.clipPath = `circle(${value}px at center)`;
});
