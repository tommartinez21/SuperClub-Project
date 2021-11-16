const express = require('express');
const { agregarAlCarrito } = require('../controllers/productController');
const productController = require('../controllers/productController');
const router = express.Router();

router.get("/addToCart", (req, res) => {
    agregarAlCarrito(req.query.id)
    res.status(200).redirect(`/product/${req.query.id}`)
})

router.get("/:id", productController.renderProduct);

module.exports = router