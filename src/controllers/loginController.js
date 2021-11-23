const fs = require("fs");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const actions = {
  getUser: (email) => {
    let users = JSON.parse(fs.readFileSync("models/users.json", "utf-8"));
    let user = users.find((user) => user.emailUsuario == email);
    return user;
  },

  validatePass: (user, password) => {
    return bcrypt.compareSync(password, user.contraseñaUsuario);
  },
};

const loginController = {
  renderLogin(req, res) {
    res.render("pages/login", { title: "Login", session: req.session });
  },

  postLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      user = actions.getUser(req.body.email);
      req.session.user = user;
      if (!req.session.previousUrl || req.session.previousUrl == "/register") {
        res.redirect("/");
      } else {
        res.redirect(req.session.previousUrl);
      }
    } else {
      res.render("pages/login", {
        title: "Login",
        errors: errors.array(),
        old: req.body,
      });
    }
  },
};

module.exports = { actions, loginController };
