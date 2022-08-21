// He uses data-attribute to select elements. They always start with "data-". A nice way of keeping javascript elements and css classes seperated, so it doesn't create errors when renaming classes. He writes about it here:https://blog.webdevsimplified.com/2019-10/do-not-use-class-selectors-in-javascript/

document.addEventListener("click", (e) => {
  const isDropDownButton = e.target.matches("[data-dropdown-button]");

  //If this is not inside of dropdown, completely ignore click
  if (!isDropDownButton && e.target.closest("[data-dropdown]") != null) return;

  //If the dropdown button IS clicked, do this...
  let currentDropdown;
  if (isDropDownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  //Closes dropdown that are currently open, EXCEPT for the one currently open
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
