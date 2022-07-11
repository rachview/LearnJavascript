const scroll = document.querySelector(".curve");
window.addEventListener("scroll", function () {
  let value = 1 + window.scrollY / -200;
  scroll.style.transform = `scaleY(${value})`;
});
