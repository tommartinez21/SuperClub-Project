const express = require("express");
const { check, body } = require("express-validator");
const loginController = require("../controllers/loginController");
const router = express.Router();

const validations = [
  check("email")
    .notEmpty()
    .withMessage("El campo de email está vacío")
    .bail()
    .isEmail()
    .withMessage("El formato del email no es válido"),
  check("password").notEmpty().withMessage("El campo de contraseña está vacío"),
];

router.get("/", loginController.renderLogin);

router.post("/", validations, loginController.postLogin);

module.exports = router;
