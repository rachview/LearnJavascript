//Navbar uses a drop shadow with animation on scroll. Fixed the scroll to load correctly with help of a resize observer.

//This is from Youtube videos, plus what I learned with the Resize Observer

///////////////////////////////////////Navbar shadow
//Peek-a-boo nav from: https://codepen.io/millertchris/pen/xxdZRmW
//Seen on Design Course: https://www.youtube.com/watch?v=RYUuGgC_IY0

const body = document.querySelector("body");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

////////////////////////////////////////// Fix scroll and Resize observer
//https://www.youtube.com/watch?v=iGUSTyG-CYw

// const navHeight = document.querySelector(".primary-navigation").offsetHeight;
// //console.log(document.documentElement);
// document.documentElement.style.setProperty(
//   "--scroll-padding",
//   navHeight - 1 + "px"
// );

//This uses a Resize Observer, so the header element's size will adjust with the screen (mobile to desktop, and so on).
//The ResizeObserver Interface is used to provide a mechanism to monitor the changes to the dimensions of an element. The notifications of the changes are delivered to the observer whenever changes take place.

//https://www.geeksforgeeks.org/javascript-resizeobserver-interface/
let boxElem = document.querySelector(".primary-navigation");

let resizeObserver = new ResizeObserver((entries) => {
  for (entry of entries) {
    // get the height and width of the element
    const navHeight = document.querySelector(
      ".primary-navigation"
    ).offsetHeight;
    //console.log(document.documentElement);
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navHeight - 1 + "px"
    );
  }
});

// observe the given element for changes
resizeObserver.observe(boxElem);
