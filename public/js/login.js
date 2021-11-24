let rememberCheck = document.querySelector("#remember-email");
let email = document.querySelector("#email");
let loginForm = document.querySelector(".formulario");
let divErrores = document.querySelector("#div-errores");
let modalLogin = document.querySelector("#modalLogin");

let loginBtn = document.querySelector("#loginBtn")
let errEmail = true
let errPassw = true

const toggleButton = () => {
  console.log("yendooo", errEmail, errPassw)
  if (errPassw || errEmail) {
      // si todos están "hidden" significa que no hay errores
      loginBtn.disabled = true
  } else {
      loginBtn.disabled = false
  }
}

window.addEventListener("load", (e) => {
  let emailStorage = localStorage.getItem("email");
  if (emailStorage) {
    email.value = emailStorage;
    rememberCheck.checked = true;
  }
  if (divErrores.innerHTML !== ""){
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


closeModal = () => {
  console.log()
  modalLogin.hidden=true
}
