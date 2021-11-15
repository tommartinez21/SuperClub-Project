const checkoutController = {
  renderCheckout(req, res) {
    res.render("pages/checkout", { title: "Pago", session: req.session });
  },
};

module.exports = checkoutController;
