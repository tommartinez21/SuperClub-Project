const fetch = require("node-fetch");
const urlBase = `http://dhfakestore.herokuapp.com/api/products/`;

const errorController = {
  getProduct: async (req, res) => {
    try {
      let resProductos = await fetch(`${urlBase}`);
      let products = await resProductos.json();
      console.log(products);
      res.render("pages/error", { title: "404 !", productos: products });
    } catch {
      console.error("error");
    }
  },
};

module.exports = errorController;
