let modoOscuro = () => {
  let skins = document.querySelectorAll(".skin");
  let botonSwitch = document.querySelector('#botonSwitch')
  let opcionSwitch = document.querySelector('#opcionSwitch')
  skins.forEach((e) => {
    e.classList.toggle("dark");
  });
  document.querySelector("body").classList.toggle("dark");
  document.querySelector("footer").classList.toggle("dark");
  botonSwitch.classList.toggle('botonSwitchOn')
  opcionSwitch.classList.toggle('opcionSwitchOn')
};
