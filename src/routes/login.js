const express = require("express");
const { check } = require("express-validator");
const { actions, loginController } = require("../controllers/loginController");
const router = express.Router();

const validations = [
  check("email")
    .notEmpty()
    .withMessage("El campo de email está vacío")
    .bail()
    .isEmail()
    .withMessage("El formato del email no es válido"),
  check("password")
    .notEmpty()
    .withMessage("El campo de contraseña está vacío")
    .bail()
    .custom((value, { req }) => {
      let user = actions.getUser(req.body.email);
      if (!user) {
        throw new Error("El email no existe");
      }
      if (!actions.validatePass(user, value)) {
        throw new Error("La contraseña es incorrecta");
      }
      return true;
    }),
];

router.get("/", loginController.renderLogin);

router.post("/", validations, loginController.postLogin);

module.exports = router;
