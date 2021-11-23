const fetch = require("node-fetch");
const urlBase = `http://dhfakestore.herokuapp.com/api/products/`;

const errorController = {
  getProduct: async (req, res) => {
    try {
      let resProductos = await fetch(`${urlBase}`);
      let products = await resProductos.json();
      res
        .status(404)
        .render("pages/error", {
          title: "404 !",
          productos: products,
          session: req.session,
        });
    } catch {
      console.error("error");
    }
  },
};

module.exports = errorController;
