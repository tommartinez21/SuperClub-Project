const fetch = require("node-fetch");
const fs = require("fs");
const { check } = require("express-validator");

const indexController = {
  renderIndex: async (req, res) => {
    req.session.previousUrl = req.originalUrl;

    let response1 = await fetch(
      "https://dhfakestore.herokuapp.com/api/products/suggested"
    );
    let response2 = await fetch(
      "https://dhfakestore.herokuapp.com/api/products/mostwanted"
    );
    let products = await response1.json();
    let products2 = await response2.json();

    res.render("pages/index", {
      title: "Home",
      products,
      products2,
      session: req.session,
    });
  },

  saveTheme: (req, res) => {
    let users = JSON.parse(fs.readFileSync("models/users.json", "utf-8"));
    let user = users.find((user) => user.id === req.session.user.id);
    user.dark = !user.dark;
    req.session.user.dark = user.dark;
    fs.writeFileSync("models/users.json", JSON.stringify(users, null, "  "));
    res.send("OK");
  },

  logout: (req, res) => {
    if (req.session.user) {
      req.session.user = null;
      res.redirect("/");
    }
  },
};

module.exports = indexController;
