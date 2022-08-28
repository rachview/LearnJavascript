let lastScrollTop = 0;
navbar = document.querySelector("[data-navbar]");
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

//Style.top is used to return the top position of an element.
//pageYOffset is used to return the pixels a document has scrolled from the upper left corner of the window. So it tracks the movement of the scroll.
//documenet.documentElement returns the Element that is the root element of the document. An example from MND: The html element for HTML documents.
//scrollTop is a property that sets or returns the number of pizels an element's content is scrolled vertically.
