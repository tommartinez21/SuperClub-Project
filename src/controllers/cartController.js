const productos = require("../../public/products.js");
let preciofinal = 0;

const cartController = {
  renderCart(req, res) {
    req.session.previousUrl = req.originalUrl;
    if (!req.session.user) {
      res.redirect("/login");
    } else {
      res.render("pages/cart", {
        productos,
        preciofinal,
        title: "Carrito",
        session: req.session,
      });
    }
  },
};

module.exports = cartController;
