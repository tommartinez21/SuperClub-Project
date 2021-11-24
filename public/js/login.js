let rememberCheck = document.querySelector("#remember-email");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginForm = document.querySelector(".formulario");
let divErrores = document.querySelector("#div-errores");
let modalLogin = document.querySelector("#modalLogin");
let loginBtn = document.querySelector("#loginBtn");
let errPassw = true;
let errEmail = true;

const toggleButton = () => {
  console.log("boton disabled? ", loginBtn.disabled);
  console.log("errEmail: " + errEmail + ", errPassw: " + errPassw);
  loginBtn.disabled = errEmail || errPassw ? true : false;
};

window.addEventListener("load", (e) => {
  let emailStorage = localStorage.getItem("email");

  if (emailStorage) {
    email.value = emailStorage;
    rememberCheck.checked = true;
    errEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
      email.value
    )
      ? false
      : true;
    toggleButton();
  }

  if (divErrores && divErrores.innerHTML !== "") {
    e.preventDefault();
    modalLogin.hidden = false;
  }
});

loginForm.addEventListener("submit", (e) => {
  if (rememberCheck.checked) {
    localStorage.setItem("email", email.value);
  } else {
    localStorage.removeItem("email");
  }
});

email.addEventListener("input", (e) => {
  errEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    e.target.value
  )
    ? false
    : true;
  toggleButton();
});

password.addEventListener("keyup", (e) => {
  errPassw = e.target.value.length < 8 ? true : false;
  toggleButton();
});

closeModal = () => {
  console.log();
  modalLogin.hidden = true;
};
