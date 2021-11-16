const fs = require("fs");
const fetch = require("node-fetch");
const urlBase = `http://dhfakestore.herokuapp.com/api/products/`;

const actions = {};
const existProduct = async (idProduct) => {
  let response = await fetch(`${urlBase}`);
  let data = await response.json();
  let valid = data.find((p) => p._id == idProduct);
  return valid;
};

const productController = {
  agregarAlCarrito(id, req, res) {
    fetch(`http://dhfakestore.herokuapp.com/api/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        let users = JSON.parse(fs.readFileSync("models/users.json", "utf-8"));
        let idUser = req.session.user.id;
        console.log(idUser)
        let user = users.find((user) => user.id === idUser);
        if (!user.cart.find((productInCart) => {
          console.log(productInCart.id)
          console.log(productInCart._id)
          productInCart.id == id
        })) {
          users
            .find((user) => user.id === idUser)
            .cart.push({ id: id, cantidad: 1 });
          fs.writeFileSync(
            "models/users.json",
            JSON.stringify(users, null, "  ")
          );
        } else {
          console.error("El producto ya existe en el carrito");
        }
        res.status(200).redirect('/cart');
      })
      .catch((err) => {
        res.send(err + " (El producto no existe en la API)");
      });
  },
  getProduct: async (req, res) => {
    req.session.previousUrl = req.originalUrl;
    const idProducto = req.params.id;
    if (await existProduct(idProducto)) {
      try {
        let resProducto = await fetch(`${urlBase}${idProducto}`);
        let resRelated = await fetch(`${urlBase}${idProducto}/related`);
        let dataProducto = await resProducto.json();
        let dataRelated = await resRelated.json();

        res.render("pages/product", {
          title: `Producto ${idProducto}`,
          producto: dataProducto,
          related: dataRelated,
          session: req.session,
        });
      } catch {
        console.error("error");
      }
    } else res.redirect("/error");
  },
};

module.exports = productController;
