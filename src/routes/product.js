const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/:id", productController.getProduct);
//router.get("/:id", productController.renderProduct);

router.get("/addToCart", (req, res) => {
  console.log(req.query.id);
  agregarAlCarrito(req.query.id);
  res.status(200).redirect(`/product/${req.query.id}`);
});

module.exports = router;
