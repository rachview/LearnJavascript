//This cycles through the images
let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  //   Resets the loop
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
