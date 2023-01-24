const page = document.querySelector("body");
const lightSwitch = document.querySelector("#colorToggle");

lightSwitch.addEventListener("click", function () {
  page.classList.toggle("dark");
  if (lightSwitch.innerHTML == "Dark mode") {
    lightSwitch.innerHTML = "Light mode";
  } else if (lightSwitch.innerHTML == "Light mode") {
    lightSwitch.innerHTML = "Dark mode";
  }
});
