//Populating a testimonial slider with object constructor and event bubbling

const btn = document.querySelectorAll(".btn");
const personImg = document.querySelector(".client-img");
const personName = document.querySelector(".client-name");
const personText = document.querySelector(".client-test");
let index = 0;
const customerArray = [];

//Create a customer with a object constructor
//www.geeksforgeeks.org/javascript-object-constructors/
//https://www.educba.com/javascript-object-constructors/

//Collection of unordered related data in the form of key: value pairs is referred as Objects in JavaScript, here keys can be variables or functions and called by the name properties and methods accordingly. Objects are different from primitive data types of JavaScript such as Number, Boolean, String, symbol, etc. which store only single value based on their data type. Whereas Objects can contain any combination of primitive data types and also objects, known as a reference data type.

/*function <function name> ( <attributes> ){
this.<name of the attribute> = <name of the attribute>;
...
...
}
var <object name> = new <function name> ( <values for attributes> )*/

https: function person(img, name, text) {
  this.img = img;
  this.name = name;
  this.text = text;
}

//Create new customer
function createCustomer(img, name, text) {
  let fullImg = `./img/person-${img}.jpg`;
  let customer = new person(fullImg, name, text);
  customerArray.push(customer);
}

//Populate the array with these reviews
createCustomer(
  0,
  "Ayo Ogunseinde",
  "This site is really great! I enjoyed everything! 5 out of 5"
);

createCustomer(
  1,
  "Chandri Anggara",
  "Works well with everything that I needed. Excellent customer services and designer was attentive to detail!"
);

createCustomer(2, "Joseph Gonzalex", "Good prices, good service, will return.");

createCustomer(
  3,
  "Matheus Ferrero",
  "Wow! They were able to do things that I've never seen another company do! What are you waiting for? Buy now!"
);

btn.forEach(function (button) {
  //This uses event bubbling
  //Bubbling starts from the bottom and works to the top.
  //Capturing starts from the top and works to the bottom.
  /* https://www.geeksforgeeks.org/event-bubbling-in-javascript/
    Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

    addEventListener(type, listener, useCapture)

    And...

    https://www.sitepoint.com/event-bubbling-javascript/
    Event bubbling relates to the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a listener for the same event (a click, for example).
    
    https://www.youtube.com/watch?v=Q6HAJ6bz7bY*/

  button.addEventListener("click", function (e) {
    if (e.target.parentElement.classList.contains("prev")) {
      if (index === 0) {
        index.customerArray.length;
      }
      index--;
      personImg.src = customerArray[index].img;
      personName.textContent = customerArray[index].name;
      personText.textContent = customerArray[index].text;
    }
    if (e.target.parentElement.classList.contains("next")) {
      index++;
      if (index === customerArray.length) {
        index = 0;
      }
      personImg.src = customerArray[index].img;
      personName.textContent = customerArray[index].name;
      personText.textContent = customerArray[index].text;
    }
  });
});
