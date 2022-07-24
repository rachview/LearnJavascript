// From Kevin Powell's videos: https://youtu.be/RxnV9Xcw914 AND https://youtu.be/huVJW23JHKQ

//navbar
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
//fade-in animations
const faders = document.querySelectorAll(".fade-in");
//sliders
const sliders = document.querySelectorAll(".slide-in");

//////////For navbar
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    //console.log(entry.target);
    //If the section is not intersecting with the viewport (or whatever rootMargins), add class
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    }
    //If the section IS intersecting with the viewport, remove class
    else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
////////////For fade-in
const appearOptions = {
  //Keeps it from trigger before the user gets to this section of the page--needs 100% of intersecting to fire
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    //If not intersecting, function is over (won't fire)
    if (!entry.isIntersecting) {
      return;
    }
    //If it is intersecting, function triggers calling the class
    else {
      entry.target.classList.add("appear");
      //Once something has been observed, stopping looking at it--causes things not to refire over and over
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
