let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItem = () => {
  //when basket's length not equal zero
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        let { img, name, price } = search; //destructing an object (search)
        return `
        <div class="cart-item">
          <img class="img-cart-size-smaller" src="${img}" alt="item">
          <div class="details">

            <div class="title-price-x">
            <h4 class="title-price">
              <p>${name}</p>
              <p class="cart-item-price">@ $${price}</p>
            </h4>
            <i onclick="removeItem(${id})" class="red bold bi bi-x-lg"></i>
            </div>

            <div class="buttons">
                <i onclick="decrement(${id})" class="red bi bi-dash-lg"></i>
                <div id="${id}" class="quantity">${item}</div>
                <i onclick="increment(${id})" class="green bi bi-plus-lg"></i>
            </div>

            <h3>$${item * search.price}</h3>
          </div>
        </div>
        `;
      })
      .join(""));
  } else {
    //console.log("basket is empty");
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Opps, your cart is empty</h2>
    <a href="index.html">
    <button class="homeBtn">Continue Shopping</button>
    </a>
    `;
  }
};

generateCartItem();

//Increase
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  generateCartItem(); //rerenders the cart items
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
//Decrease
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0); //filters objects that equal 0
  generateCartItem(); //generates the cards (needed to render cards after reaching 0)
  localStorage.setItem("data", JSON.stringify(basket));
};
//Updates the # of items
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  //console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  totalAmount();
};

//Remove item
let removeItem = (id) => {
  let selectedItem = id;
  //console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItem();
  totalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

//Clear cart
let clearCart = () => {
  basket = [];
  generateCartItem();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

//Total amount
let totalAmount = () => {
  if (basket.length !== 0) {
    //if there is something inside the array...
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        //search the id vs the data.js file (database)
        let search = shopItemsData.find((y) => y.id === id) || [];
        //item in the cart * search.price (database price set for item)
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0); //this sums the amount
    //console.log(amount);
    label.innerHTML = `
    <h2>Total Bill: $${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    <a href="index.html"><button class="keepshopping">Continue Shopping</button></a>
    `;
  } else return; //stop the code
};

totalAmount();
