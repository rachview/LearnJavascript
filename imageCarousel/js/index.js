//From Balboa Codes - https://www.youtube.com/watch?v=eywZbJ5PVjg

const cImages = document.querySelector(".carousel__images");
const cBtns = document.querySelectorAll(".carousel__button");
const numberOfImgs = document.querySelectorAll(".carousel__images img").length;
let imageIndex = 1;
let translateX = 0;

cBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImgs) {
        imageIndex++;
        translateX -= 300;
      }
    }
    cImages.style.transform = `translateX(${translateX}px)`;
  });
});
