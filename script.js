const page = document.querySelector("body");
const lightSwitch = document.querySelector("#colorToggle");

lightSwitch.addEventListener("click", function () {
  page.classList.toggle("dark");
  console.log("helloooo");
  if (page.classList.contains("dark")) {
    console.log("You are using Dark theme");
    lightSwitch.innerHTML = `<ion-icon class='color-theme-icon' name='sunny'></ion-icon>`;
    lightSwitch.style.backgroundColor = "#fff";
  } else if (!page.classList.contains("dark")) {
    console.log("You are using light theme");
    lightSwitch.innerHTML = `<ion-icon class='color-theme-icon' name='moon'></ion-icon>`;
    lightSwitch.style.backgroundColor = "rgb(57, 31, 246)";
  }

  // if (lightSwitch.innerHTML == "<ion-icon name='moon'></ion-icon>") {
  //   lightSwitch.innerHTML = "<ion-icon name='sunny'></ion-icon>";
  //   lightSwitch.style.backgroundColor = "#fff";
  // } else if (lightSwitch.innerHTML == "<ion-icon name='sunny'></ion-icon>") {
  //   lightSwitch.innerHTML = '<ion-icon name="moon"></ion-icon>';
  //   lightSwitch.style.backgroundColor = "rgb(57, 31, 246)";
  // }
});
