const express = require('express');
const registerController = require('../controllers/registerController');
const router = express.Router();
const {check} = require("express-validator");
const fs = require("fs");

router.get("/", registerController.renderRegister);

router.post("/", [check("emailUsuario")
.notEmpty().withMessage("Debe completar con su email")
.bail()
.isEmail().withMessage("Email no válido")
.bail()
.custom((value, { req }) => {
    let users = JSON.parse(fs.readFileSync("models/users.json", "utf-8"));
    let user = users.find((user) => user.emailUsuario == value);
    if (user) {
        throw new Error("El email ya está registrado");
    }
   return true;
 }),
check("nombreUsuario")
.notEmpty().withMessage("Debe completar con nombre de Usuario")
.trim(),
check("contraseñaUsuario")
.notEmpty().withMessage("Debe completar contraseña")
.bail()
.isLength({min:8}).withMessage("La contraseña tiene que tener como mínimo 8 caracteres")] ,registerController.processRegister);

module.exports = router