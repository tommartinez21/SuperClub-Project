const { id } = require("../../public/product.js");
const producto = require("../../public/product.js");
const fetch = require("node-fetch");
const fs = require("fs");

const productController = {

  agregarAlCarrito(id) {
    fetch(`http://dhfakestore.herokuapp.com/api/products/${id}`)
    .then(res => res.json())
    .then(product => {
      let users = JSON.parse(fs.readFileSync("models/users.json", "utf-8"));
      let idUser = 1
      let user = users.find(user => user.id === idUser)
      if (!user.cart.find(productInCart => productInCart.id === id)) {
        users.find(user => user.id === idUser).cart.push({id: id, cantidad: 1})
        fs.writeFileSync("models/users.json", JSON.stringify(users,null,"  "));
      } else {
        console.error('El producto ya existe en el carrito')
      }
    })
    .catch((err) => {
      console.error(err + " (El producto no existe en la API)");
    });
  },

  renderProduct(req, res) {
    req.session.previousUrl = req.originalUrl;
    res.render("pages/product", {
      title: `Producto ${req.params.id}`,
      producto: producto,
      session: req.session, 
    });
  },
};

module.exports = productController;
