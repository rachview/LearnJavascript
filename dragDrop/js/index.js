const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

//This loops through the draggable objects
draggables.forEach((draggable) => {
  //This fires when dragging starts
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
  //This is when the dragging stops
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

//Runs to see what element is over, constantly runs
containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    //Prevents the circle with cross through it when inside of the container div
    e.preventDefault();
    const afterElement = getDragAfterElements(container, e.clientY);
    //Get element currently dragging. Only one element will have dragging class currently at the time.
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      //Not above anything, this appends the element to the container
      container.appendChild(draggable);
    } else {
      //This is for the element before (determining if gets inserted between two elements)
      container.insertBefore(draggable, afterElement);
    }
  });
});

//Get mouse position and container and sort it.
function getDragAfterElements(container, y) {
  //This only get elements not with the dragging class
  //... is the Spread Operator-spread it out into a new array
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging"),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      //Subtract the top and height (divide by 2 to give half)
      const offset = y - box.top - box.height / 2;
      //Care about only those that negative offests (below elements)
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
  //Want this to always be the smallest number, so it's always greater than inital offest.
  //Return the element from reduce function.
}
