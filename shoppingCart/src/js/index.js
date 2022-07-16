//From FreeCode Camp: https://www.youtube.com/watch?v=cT_ZYrS3tKc
let shop = document.getElementById("shop");

// let shopItemsData = [
//   {
//     id: "casualshirt",
//     name: "Casual Shirt",
//     price: 45,
//     desc: "A casual shirt for everyday wear.",
//     img: "./images/img-1.jpg",
//   },
//   {
//     id: "officeshirt",
//     name: "Office Shirt",
//     price: 100,
//     desc: "A light office shirt for long days in the office.",
//     img: "./images/img-2.jpg",
//   },
//   {
//     id: "tshirt",
//     name: "T-Shirt",
//     price: 25,
//     desc: "A sturdy and soft T-Shirt for all occations.",
//     img: "./images/img-3.jpg",
//   },
//   {
//     id: "suit",
//     name: "Mens 3-Piece Suit",
//     price: 300,
//     desc: "A beautiful 3-piece suit for fancy and casual days.",
//     img: "./images/img-4.jpg",
//   },
// ];

/* Es6 arrow function:          vs     Regular function:
let generateShop = () => {};    vs     function abcd() {} */

// Storing data in basket:
//Empty array (so not to break the app) or getting from local storage
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x; //Saves you from x.something
      let search = basket.find((x) => x.id === id) || []; //get items from localStorage, or return empty array.
      return `
        <div id="product-id-${id}" class="item">
            <img class="img-cart-size" src=${img} alt="shirt">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="red bi bi-dash-lg"></i>
                        <div id="${id}" class="quantity">
                        ${search.item === undefined ? 0 : search.item}
                        </div>
                        <i onclick="increment(${id})" class="green bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
  `;
    })
    .join(""));
};

generateShop();

// Using the id (div id="id") lets Javascript see which item is being add/subtracted.
// The use of .id is because strings were use for id (if numbers not required)
//Increase
let increment = (id) => {
  let selectedItem = id;
  //checking to see if item exists.
  let search = basket.find((x) => x.id === selectedItem.id);

  //if item not found *only* then push it into the basket.
  //This code only increases the item#, not all the information over and over.
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
//Decrease
let decrement = (id) => {
  let selectedItem = id;
  //checking to see if item exists.
  let search = basket.find((x) => x.id === selectedItem.id);
  //If decreasing from 0 (no localStorage data causes an error otherwise)
  if (search === undefined) return;
  //if item is 0 then code stops. This code only decreases the item#.
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0); //filtering out items that don't equal 0
  //This goes at the bottom after the filter has run.
  localStorage.setItem("data", JSON.stringify(basket));
};

//Updates the # of items
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  //console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

//Calculates the items going into the shopping cart
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  //Starts at 0, x+y are the numbers adding together so on and so forth.
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

//This fixes the cart to update
calculation();
