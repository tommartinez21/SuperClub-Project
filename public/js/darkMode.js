let modoOscuro = () => {
  let skins = document.querySelectorAll(".skin");
  skins.forEach((e) => {
    e.classList.toggle("dark");
  });
  document.querySelector("body").classList.toggle("dark");
  document.querySelector("footer").classList.toggle("dark");
};
