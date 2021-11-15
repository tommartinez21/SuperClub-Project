const productos = require("../../public/products.js");
let preciofinal = 0;

const cartController = {
    renderCart(req, res) {
        res.render("pages/cart", {
            productos,
            preciofinal,
            title: "Carrito",
        })

    }
}

module.exports = cartController