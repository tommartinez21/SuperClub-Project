let rememberCheck = document.querySelector("#remember-email");
let email = document.querySelector("#email");
let loginForm = document.querySelector(".formulario");

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
