//A simple calculator from Javascript Academy: https://www.youtube.com/watch?v=QS6Y0ezhyCs

let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    /*console.log("clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);*/
    switch (e.target.innerText) {
      //case C clears the innerHTML to clear the string
      case "C":
        display.innerText = "";
        break; //needs break or it leaves a "C" in display
      //This is the backspace key
      case "←":
        //if statement checks to see if there is text
        //Avoid unnesscary function calls
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
          //slice method removes last character from display
        }
        break;
      //Equal sign
      case "=":
        //Try catch will catch invalid statements
        try {
          display.innerText = eval(display.innerText); //Eval is wonderful, it does all the expressions of math.
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        //Adds the the contents of buttons into display: "12+C/="
        display.innerText += e.target.innerText;
    }
  });
});

//He warns not to use Eval because of security risk. Apllications with real users, avoid it.
