const { validationResult } = require("express-validator");
const fs = require("fs");

const actions = {
  getUser: (email) => {
    let users = JSON.parse(fs.readFileSync("models/users.json", "utf-8"));
    let user = users.find((user) => user.email == email);
    return user;
  },

  validatePass: (user, password) => {
    return user.password == password;
  },
};

const loginController = {
  renderLogin(req, res) {
    res.render("pages/login", { title: "login" });
  },

  postLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let user = actions.getUser(req.body.email);
      if (user) {
        if (actions.validatePass(user, req.body.password)) {
          req.session.user = user;
          res.redirect("/");
        } else {
          res.redirect("/login"); // Contraseña incorrecta
        }
      } else {
        res.redirect("/login"); // Mail no existe
      }
    } else {
      res.redirect("pages/login"); // Errores de validación
    }
  },
};

module.exports = loginController;
