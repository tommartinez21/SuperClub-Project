const { validationResult } = require("express-validator");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { render } = require("ejs");

const registerController = {
  renderRegister(req, res) {
    req.session.previousUrl = req.originalUrl;
    res.render("pages/register", { title: "register", session: req.session });
  },

  processRegister: (req, res) => {
    req.session.previousUrl = req.originalUrl;

    let errors = validationResult(req);

    if (errors.errors.length != 0)
      res.render("pages/register", {
        title: "register",
        errors: errors.errors,
        old: req.body,
      });
    else {
      let users = JSON.parse(fs.readFileSync("models/users.json", "utf-8"));

      let ids = users.map((x) => x.id);
      let idMax = users.length == 0 ? 0 : Math.max(...ids);

      let contraseñaCrypt = bcrypt.hashSync(req.body.contraseñaUsuario, 10);

      let user = {
        id: idMax + 1,
        nombreUsuario: req.body.nombreUsuario,
        emailUsuario: req.body.emailUsuario,
        contraseñaUsuario: contraseñaCrypt,
        cart: [],
      };

      users.push(user);

      fs.writeFileSync("models/users.json", JSON.stringify(users, null, "  "));

      res.render("pages/login", {
        usuarioRegistrado: "Se registró correctamente",
        title: "login",
      });
    }
  },
};

module.exports = registerController;
