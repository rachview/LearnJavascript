const switchElement = document.querySelector(".switch");

//Switch element clicked, then toggle dark class to body
switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
