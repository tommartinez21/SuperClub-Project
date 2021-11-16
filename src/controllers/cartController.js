const session = require("express-session");
const fetch = require("node-fetch");
const users = require("../../models/users");
let preciofinal = 0;

const cartController = {
  renderCart(req, res) {
    if (!req.session.user) {
      console.error("El usuario no está logeado");
      res.redirect("/login");
    }
    let idUser = req.session.user.id;
    let userLogged = users.find((usuario) => usuario.id === idUser);

    req.session.previousUrl = req.originalUrl;
    

    let productsInCart = [];
    fetch("http://dhfakestore.herokuapp.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        userLogged.cart.forEach((product) => {
          let productFromApi = data.find(
            (element) => element._id === product.id
          );
          productFromApi.cantidad = product.cantidad;
          productsInCart.push(productFromApi);
        });
        return productsInCart;
      })
      .then((productsInCart) => {
        let productos = productsInCart;
        res.render("pages/cart", {
          productos,
          preciofinal,
          title: "Carrito",
          session: req.session,
        });
      })
      .catch((err) => {
        res.send("ERROR, VER CONSOLA");
        console.error(err);
      });
  },
};

module.exports = cartController;
