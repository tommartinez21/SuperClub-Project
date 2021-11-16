//const producto = require("../../public/product.js");
const fetch = require("node-fetch");
const urlBase = `http://dhfakestore.herokuapp.com/api/products/`;

const actions = {};
const existProduct = async (idProduct) => {
  let response = await fetch(`${urlBase}`);
  let data = await response.json();
  //let valid = data.includes((p) => p._id == idProduct);
  let valid = data.find((p) => p._id == idProduct);
  return valid;
};

const productController = {
  getProduct: async (req, res) => {
    const idProducto = req.params.id;
    if (await existProduct(idProducto)) {
      try {
        let resProducto = await fetch(`${urlBase}${idProducto}`);
        let resRelated = await fetch(`${urlBase}${idProducto}/related`);
        let dataProducto = await resProducto.json();
        let dataRelated = await resRelated.json();
        //enviar solo 5 productos

        res.render("pages/product", {
          title: `Producto ${idProducto}`,
          producto: dataProducto,
          related: dataRelated,
        });
      } catch {
        console.error("error");
      }
    } else res.render("pages/error", { title: "404 !" });
  },
};

module.exports = productController;
