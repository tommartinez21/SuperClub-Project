let formulario = document.querySelector("#formulario");
let emailUsuario = document.querySelector("#emailUsuario");
let nombreUsuario = document.querySelector("#nombreUsuario");
let contraseñaUsuario = document.querySelector("#contraseñaUsuario");
let errorPassword = document.querySelector(".errorPassword");
let errorEmail = document.querySelector(".errorEmail");
let errorNombreUsuario = document.querySelector(".errorNombreUsuario");

contraseñaUsuario.addEventListener("keyup", (e) =>{
    if (e.target.value.length <8){
        errorPassword.innerHTML = "Tiene que tener más de 8 caracteres";
        errorPassword.hidden = false;
    }
    else{
        errorPassword.innerHTML = "Contraseña válida"
    }
})

nombreUsuario.addEventListener("focus", (e) => {
    if (e.target.value === ""){
        errorNombreUsuario.innerHTML = "No puede estar en blanco";
        errorNombreUsuario.hidden = false;
    }
})

nombreUsuario.addEventListener("keyup", (e) => {
    if (e.target.value !== ""){
        errorNombreUsuario.innerHTML = "Válido";
    }
    else{
        errorNombreUsuario.innerHTML = "No puede estar en blanco";
    }
})

emailUsuario.addEventListener("input", (e) => {
    const emailInputValue = e.target.value;

    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true){
        errorEmail.innerHTML = "Email inválido";
        errorEmail.hidden = false;
    }
    else {
        errorEmail.innerHTML = "Email válido";
    }
})

