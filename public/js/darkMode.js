let isDark = document.querySelector("#is-dark");
let skins = document.querySelectorAll(".skin");
let botonSwitch = document.querySelector("#botonSwitch");
let opcionSwitch = document.querySelector("#opcionSwitch");

window.onload = () => {
  console.log(isDark.innerHTML);
  if (isDark.innerHTML === "true") {
    oscuro();
  } else {
    claro();
  }
};

let oscuro = () => {
  skins.forEach((e) => {
    e.classList.add("dark");
  });
  document.querySelector("body").classList.add("dark");
  document.querySelector("footer").classList.add("dark");
  botonSwitch.classList.add("botonSwitchOn");
  opcionSwitch.classList.add("opcionSwitchOn");
};

let claro = () => {
  skins.forEach((e) => {
    e.classList.remove("dark");
  });
  document.querySelector("body").classList.remove("dark");
  document.querySelector("footer").classList.remove("dark");
  botonSwitch.classList.remove("botonSwitchOn");
  opcionSwitch.classList.remove("opcionSwitchOn");
};

let cambiarTema = () => {
  debugger;
  fetch("/theme", { method: "POST" })
    .then((res) => res.json())
    .then((data) => console.log(data));

  if (isDark.innerHTML === "true") {
    claro();
  } else {
    oscuro();
  }
};
