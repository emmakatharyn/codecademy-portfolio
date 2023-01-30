const page = document.querySelector("body");
const lightSwitch = document.querySelector("#colorToggle");

lightSwitch.addEventListener("click", function () {
  page.classList.toggle("dark");
  if (lightSwitch.innerHTML == "Dark theme") {
    lightSwitch.innerHTML = "Light theme";
    lightSwitch.style.backgroundColor = "#fff";
  } else if (lightSwitch.innerHTML == "Light theme") {
    lightSwitch.innerHTML = "Dark theme";
    lightSwitch.style.backgroundColor = "rgb(57, 31, 246)";
  }
});
