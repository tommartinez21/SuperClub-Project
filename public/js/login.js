let rememberCheck = document.querySelector("#remember-email");
let email = document.querySelector("#email");
let loginForm = document.querySelector(".formulario");

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
});

loginForm.addEventListener("submit", (e) => {
  if (rememberCheck.checked) {
    localStorage.setItem("email", email.value);
  } else {
    localStorage.removeItem("email");
  }
});
