const page = document.querySelector("body");
const lightSwitch = document.querySelector("#colorToggle");

lightSwitch.addEventListener("click", function () {
  page.classList.toggle("dark");
});
