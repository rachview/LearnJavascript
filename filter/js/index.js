//Menu uses a filter and populates the HTML elements through JS.
//From https://www.youtube.com/watch?v=3PHXvlpOkf4

//items that load in the menu
const menu = [
  {
    id: 1,
    title: "Pink Dream",
    category: "cake",
    price: 50.99,
    img: "./img/cake-deva-williamson.jpg",
  },

  {
    id: 2,
    title: "Blue Delight",
    category: "cake",
    price: 45.99,
    img: "./img/cake-natallia-nagorniak.jpg",
  },

  {
    id: 3,
    title: "White Knight",
    category: "cake",
    price: 75.99,
    img: "./img/cake-tony-eight-media.jpg",
  },

  {
    id: 4,
    title: "Chocolate Yummies",
    category: "cookie",
    price: 5.99,
    img: "./img/cookie-eiliv-sonas-aceron.jpg",
  },

  {
    id: 5,
    title: "Taste of Paris",
    category: "cookie",
    price: 6.99,
    img: "./img/cookie-heather-barnes.jpg",
  },

  {
    id: 6,
    title: "Chipping Tradition",
    category: "cookie",
    price: 4.99,
    img: "./img/cookie-mae-mu.jpg",
  },

  {
    id: 7,
    title: "Pudding, 4 Your Pudding",
    category: "misc",
    price: 7.99,
    img: "./img/misc-jasmine-huang.jpg",
  },

  {
    id: 8,
    title: "Do-rights",
    category: "misc",
    price: 6.99,
    img: "./img/misc-kobby-mendez.jpg",
  },

  {
    id: 9,
    title: "Gimmie Brownie",
    category: "misc",
    price: 4.99,
    img: "./img/misc-pushpak-dsilva.jpg",
  },

  {
    id: 10,
    title: "Cloudy Cream",
    category: "pie",
    price: 12.99,
    img: "./img/pie-alex-lvrs.jpg",
  },

  {
    id: 11,
    title: "Patriot Pie",
    category: "pie",
    price: 11.99,
    img: "./img/pie-elena-sambros.jpg",
  },

  {
    id: 12,
    title: "Fruity Tuesday",
    category: "pie",
    price: 11.99,
    img: "./img/pie-jodie-morgan.jpg",
  },

  {
    id: 13,
    title: "Strawberry Starlight",
    category: "shake",
    price: 5.99,
    img: "./img/shake-sebastian-coman-photography.jpg",
  },

  {
    id: 14,
    title: "Come & Get It",
    category: "shake",
    price: 4.99,
    img: "./img/shake-victor-rutka.jpg",
  },

  {
    id: 15,
    title: "Double Trouble",
    category: "icecream",
    price: 2.99,
    img: "./img/icecream-cadence-t.jpg",
  },

  {
    id: 16,
    title: "Floats Your Boat",
    category: "icecream",
    price: 3.99,
    img: "./img/icecream-emile-mbunzama.jpg",
  },

  {
    id: 17,
    title: "Think Pink",
    category: "icecream",
    price: 2.99,
    img: "./img/icecream-ian-dooley.jpg",
  },

  {
    id: 18,
    title: "Berry Bar",
    category: "icecream",
    price: 3.99,
    img: "./img/icecream-pablo-merchan-montes.jpg",
  },

  {
    id: 19,
    title: "Imagination Celebration",
    category: "icecream",
    price: 2.99,
    img: "./img/icecream-sheri-silver.jpg",
  },

  {
    id: 20,
    title: "Mean Green",
    category: "icecream",
    price: 1.99,
    img: "./img/icecream-anthony-espinosa.jpg",
  },

  {
    id: 21,
    title: "Cyro Freeze",
    category: "icecream",
    price: 2.99,
    img: "./img/icecream-slashio-photography.jpg",
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//Load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtn();
});

// Display Menu Items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="row menu-item">
                    <div class="col" data-item="cakes">
                        <a class="card-link" href="#">
                            <div class="card item-info">
                                <div class="card-img">
                                    <img src=${item.img} class="card-img-top" alt=${item.title}>
                                </div>
                                <div class="card-body">
                                    <div class="card-text">
                                        <p><span class="card-text-item">${item.title}</span></p>
                                        <p class="card-text-price">$<span class="card-text-price">${item.price}</span></p>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

//Display Menu Btns
function displayMenuBtn() {
  //Function for btn
  //Get only unique category
  const categories = menu.reduce(
    function (values, item) {
      //If it does not include value (category), push value into array.
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<a href="#" class="btn filter-btn" data-id="${category}">${category}</a>`;
    })
    .sort()
    .join("");
  //.sort ==> sorts things alphabetically
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  //Filter btns
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      //console.log(menuCategory);
      //All has to be set up to call everything in the array, it doesn't have it's own id--like the others do.
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        //This display items for each categories
        displayMenuItems(menuCategory);
      }
    });
  });
}
