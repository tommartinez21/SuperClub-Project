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
    res.render("pages/login", { title: "Login" });
  },

  postLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      user = actions.getUser(req.body.email);
      req.session.user = user;
      res.redirect("/");
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