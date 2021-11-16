const fetch = require("node-fetch");
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
};

module.exports = indexController;
