//Trying to find out how to close a modal by other means.

const array = [
  {
    title: "Offer One",
    text: "Donut tart liquorice bonbon tart halvah sugar plum soufflé. Biscuit chocolate bar marzipan tart pastry soufflé macaroon. Fruitcake powder shortbread gingerbread toffee fruitcake. Gummies gummi bears pudding tart danish topping apple pie chocolate. Cupcake carrot cake liquorice sesame snaps tart croissant cookie sweet!",
  },

  {
    title: "Offer Two",
    text: "Dessert lemon drops carrot cake chocolate cake cupcake halvah chocolate tiramisu. Candy canes fruitcake biscuit sugar plum sweet pudding pudding dragée. Jelly oat cake muffin powder bonbon lollipop brownie. Sesame snaps wafer powder oat cake muffin powder. !",
  },

  {
    title: "Offer Three",
    text: "Brownie gummies carrot cake halvah brownie wafer dragée shortbread. Macaroon chocolate bar gummi bears powder bonbon lemon drops ice cream. Sesame snaps shortbread tootsie roll pie croissant.!",
  },
];

const modal = document.querySelector(".modal");
const container = document.querySelector(".modal-container");
const btn = document.querySelectorAll(".btn");
const btnCloseModal = document.querySelector(".btn-modal");
const title = document.getElementById("title");
const text = document.getElementById("text");

btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.classList.contains("one")) {
      modal.classList.add("modal-show");
      title.innerHTML = array[0].title;
      text.innerHTML = array[0].text;
    }
    if (e.target.classList.contains("two")) {
      modal.classList.add("modal-show");
      title.innerHTML = array[1].title;
      text.innerHTML = array[1].text;
    }
    if (e.target.classList.contains("three")) {
      modal.classList.add("modal-show");
      title.innerHTML = array[2].title;
      text.innerHTML = array[2].text;
    }
  });
  //IT WORKS!
  //www.youtube.com/watch?v=DxWqBRqAGLo&list=WL&index=15

  //Closes the modal when clicking anywhere outside of Modal-Container class (in order for this to work, it has to be a child of something, in this case, Modal.)
  window.addEventListener("mouseup", function (event) {
    const box = container;
    if (event.target != box && event.target.parentNode != box) {
      modal.classList.remove("modal-show");
    }
  });
});

btnCloseModal.addEventListener("click", function () {
  if (modal.classList.contains("modal-show")) {
    modal.classList.remove("modal-show");
  }
});
