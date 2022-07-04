//Populating a gallery through a javascript array.

const images = [
  { id: 1, image: "./img/pexels-bekir-donmez.jpg", author: "Benkir Donmez" },
  { id: 2, image: "./img/pexels-kris-møklebust.jpg", author: "Kris Møklebust" },
  { id: 3, image: "./img/pexels-matteo-basile.jpg", author: "Matteo Basile" },
  { id: 4, image: "./img/pexels-melike-benli.jpg", author: "Melike Benli" },
];

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
// const btn = document.querySelectorAll(".btn");
const author = document.querySelector(".author");
const carousel = document.querySelector(".carousel");

let count = 0;

//Load intial item (so images boot faster)
window.addEventListener("DOMContentLoaded", function () {
  showImage();
});

function showImage() {
  const item = images[count];
  //Assign the source of image element
  carousel.src = item.image;
  //Assign the author to the h2 element
  author.textContent = item.author;
}

// btn.forEach(function (button) {
//   // Button click event
//   button.addEventListener("click", function () {
//     if (button.classList.contains("next-btn")) {
//       count++;
//       //console.log(count);
//       //Cycle through images
//       if (count > images.length - 1) {
//         count = 0;
//       }
//       showImage();
//       //Display in Carousel
//     } else if (button.classList.contains("prev-btn")) {
//       count--;
//       //console.log(count);
//       //Cycle through images
//       if (count < 0) {
//         count = images.length - 1;
//       }
//       showImage();
//       //Cycle through images
//       //Display in Carousel
//     } else {
//       count = 0;
//       console.log("This is a placeholder");
//     }
//   });
// });

nextBtn.addEventListener("click", function () {
  count++;
  //loops around at end of array
  if (count > images.length - 1) {
    count = 0;
  }
  showImage();
});

prevBtn.addEventListener("click", function () {
  count--;
  //loops around at end of array
  if (count < 0) {
    count = images.length - 1;
  }
  showImage();
});

randomBtn.addEventListener("click", function () {
  //Pick a random number
  //Multiply it by the length of the array.
  count = Math.floor(Math.random() * images.length);
  console.log(count);
  showImage();
});
