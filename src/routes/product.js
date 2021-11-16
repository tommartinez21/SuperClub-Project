const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/addToCart", (req, res) => {
  productController.agregarAlCarrito(req.query.id, req, res);
});

router.get("/:id", productController.getProduct);
//router.get("/:id", productController.renderProduct);

module.exports = router;
