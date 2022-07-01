//Learning how to manipulate the elements inside of HTML

const btn = document.querySelector(".btn");
const head = document.querySelector(".header");
const words = document.querySelector(".paragraph");
const title = document.querySelector(".heading-one");

btn.addEventListener("click", () => {
  if (btn.classList.contains("change")) {
    btn.classList.remove("change");
    head.classList.remove("change");
  } else {
    btn.classList.add("change");
    head.classList.add("change");
  }
});

words.innerHTML =
  "The power of love is a curious thing. Make a one man weep, make another man sing. Change a hawk to a little white dove. More than a feeling that's the power of love";
title.innerHTML = "The Power of Love";
head.innerHTML = `<h3>Huey Lewis & The News Lyrics</h3> 
<ul><li>About</li>
<li>Click</li>
<li>Here</li></ul>
`;
btn.innerHTML = "Explore!";
////////////////////////////////////////////////////
