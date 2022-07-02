//A random quote generator.
const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: " Oscar Wilde",
  },

  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: " Marilyn Monroe",
  },

  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: " Albert Einstein",
  },

  {
    quote: "So many books, so little time.",
    author: " Frank Zappa",
  },

  {
    quote: "A room without books is like a body without a soul.",
    author: " Marcus Tullius Cicero",
  },

  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: " Bernard M. Baruch",
  },

  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: " William W. Purkey",
  },

  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: " Dr. Seuss",
  },

  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: " Mae West",
  },
];

const btn = document.querySelector(".btn");
let quoteSpace = document.querySelector(".quote");
let authorSpace = document.querySelector(".author");

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  //   console.log(random);

  quoteSpace.textContent = quotes[random].quote;
  authorSpace.textContent = quotes[random].author;
});

///////////What does this all mean?
///      https://www.freecodecamp.org/news/javascript-math-random-method-explained        ///
/////////////The placement of the "()" matters/////////
/////////////Tells what to work with first/////////////

// returns a random number from 0 to 1
///This will never return 1, but .9999etc
console.log("random() = " + Math.random());

//This will never return 10, but 9.9999etc
// returns a random number from 1 to 10
console.log("random()*10 = " + Math.random() * 10);

// returns a random number starting from 5
console.log("random()+5 = " + (Math.random() + 5));

// returns a random number starting from 5 to 15
console.log("random()*10+5 = " + (Math.random() * 10 + 5));

// returns a random number from 25
console.log("random()+2 = " + (Math.random() + 25));

//Math.random()*(max number - min number)+min
//Generating a random floating point number within a range
//var x = Math.random()*(max - min)+min;
console.log("random()+minmax(3max 2min) = " + (Math.random() * (3 - 2) + 2));

//Generating a random integer between 1 and a max
//If you need a random number with the minimum number being 1 (for example picking a random day in January) you could use the Math.ceil() method.
console.log("ceil and random = " + Math.ceil(Math.random() * 3));
//or
//Another way would have been to use the previous function (using Math.floor()) and add 1 to it:
console.log("floor and random = " + (Math.floor(Math.random() * 31) + 1));

//Generating a random integer within a range
//Lastly, occasionally you need a random integer between two specific integers. For example, if you are trying to pick raffle tickets and you know the numbers of the lowest and largest number:
//var x = Math.floor(Math.random()*(max-min+1)+min);
console.log(
  "floor and minmax = " + Math.floor(Math.random() * (10 - 2 + 1) + 2)
);

//  https://devswisdom.com/javascript-math-floor-math-ceil-and-math-round/

//////////////Math.floor////////////////////
//Floor ---------> lower
///There is no rounding up or down, unless a negative is introduced.
//This rounds the input number and returns the next LARGEST INTEGER, small than or equal to the input paramete param.
console.log("Math.floor 7.152 = " + Math.floor(7.152));
console.log("Math.floor 7.9 = " + Math.floor(7.9));
console.log("Math.floor -8.9 = " + Math.floor(-8.9));
console.log("Math.floor 8.9 = " + Math.floor(8.9));
console.log("Math.floor 1 = " + Math.floor(1));
console.log("Math.floor -1 = " + Math.floor(-1));

//Returns the largest integer less than or equal to the number which was passed.
///Negative: -8.1 = -9.
//Postive: 8.9 = 8

//////////////////Math.ceil/////////////////////////
//Ceiling -------> Higher
//This returns the smallest integer greather than or equal to the number that was passed.
console.log("Math.ceil 7.152 = " + Math.ceil(7.152));
console.log("Math.ceil 7.9 = " + Math.ceil(7.9));
console.log("Math.ceil -8.9 = " + Math.ceil(-8.9));
console.log("Math.ceil 8.9 = " + Math.ceil(8.9));
console.log("Math.ceil 1 = " + Math.ceil(1));
console.log("Math.ceil -1 = " + Math.ceil(-1));

//////////////////Math.round////////////////////
//Rounded
// This method returns us the number rounded to the nearest integer, the question may arise that is this going to round up or round down to get to the nearest integer, this depends on the fractional part of the number, so if the fractional part is greater than 0.5 then the number is rounded up and if the fractional part is less than 0.5 then this method rounds down the number and if it is equal to the number than it also rounds up the number.

console.log("Math.round 7.152 = " + Math.round(7.152));
console.log("Math.round 7.9 = " + Math.round(7.9));
console.log("Math.round -8.45 = " + Math.round(-8.45));
console.log("Math.round -8.55 = " + Math.round(-8.55));
console.log("Math.round -8.1 = " + Math.round(-8.1));
console.log("Math.round 1 = " + Math.round(1));
console.log("Math.round -1 = " + Math.round(-1));
