let isDark = document.querySelector("#is-dark");
let skins = document.querySelectorAll(".skin");
let botonSwitch = document.querySelector("#botonSwitch");
let opcionSwitch = document.querySelector("#opcionSwitch");

window.onload = () => {
  if (isDark) {
    if (
      !isDark.innerHTML &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      oscuro();
    } else if (isDark.innerHTML === "true") {
      oscuro();
    } else {
      claro();
    }
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    oscuro();
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
  if (isDark) isDark.innerHTML = "true";
};

let claro = () => {
  skins.forEach((e) => {
    e.classList.remove("dark");
  });
  document.querySelector("body").classList.remove("dark");
  document.querySelector("footer").classList.remove("dark");
  botonSwitch.classList.remove("botonSwitchOn");
  opcionSwitch.classList.remove("opcionSwitchOn");
  if (isDark) isDark.innerHTML = "false";
};

let cambiarTema = () => {
  fetch("/theme", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data.message));

  if (isDark.innerHTML === "true") {
    claro();
  } else {
    oscuro();
  }
};
