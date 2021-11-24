let formulario = document.querySelector("#formulario");
let emailUsuario = document.querySelector("#emailUsuario");
let nombreUsuario = document.querySelector("#nombreUsuario");
let contraseñaUsuario = document.querySelector("#contraseñaUsuario");

let errorPassword = document.querySelector(".errorPassword");
let errorEmail = document.querySelector(".errorEmail");
let errorNombreUsuario = document.querySelector(".errorNombreUsuario");

let registerBtn = document.querySelector("#registerBtn")
let errPassw = true
let errEmail = true
let errName = true

const toggleButton = () => registerBtn.disabled = errPassw || errEmail || errName ? true : false

contraseñaUsuario.addEventListener("keyup", (e) =>{
    if (e.target.value.length <8){
        errorPassword.innerHTML = "Tiene que tener más de 8 caracteres";
        errorPassword.hidden = false;
        errPassw = true
    }
    else{
        errorPassword.innerHTML = "Contraseña válida"
        errPassw = false
    }
    toggleButton()
})

nombreUsuario.addEventListener("focus", (e) => {
    if (e.target.value === ""){
        errorNombreUsuario.innerHTML = "No puede estar en blanco";
        errorNombreUsuario.hidden = false;
        errName = true
    } else {
        errName = false
    }
    toggleButton()
})

nombreUsuario.addEventListener("keyup", (e) => {
    if (e.target.value !== ""){
        errorNombreUsuario.innerHTML = "Válido";
        errName = false
    }
    else{
        errorNombreUsuario.innerHTML = "No puede estar en blanco";
        errName = true
    }
    toggleButton()
})

emailUsuario.addEventListener("input", (e) => {
    const emailInputValue = e.target.value;
    console.log(emailInputValue)
    console.log(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue))
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true){
        errorEmail.innerHTML = "Email inválido";
        errorEmail.hidden = false;
        errEmail = true
    } else {
        errorEmail.innerHTML = "Email válido";
        errEmail = false
    }
    toggleButton()
})

