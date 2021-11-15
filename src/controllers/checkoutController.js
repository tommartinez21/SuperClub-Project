const checkoutController = {
  renderCheckout(req, res) {
    req.session.previousUrl = req.originalUrl;
    res.render("pages/checkout", { title: "Pago", session: req.session });
  },
};

module.exports = checkoutController;
