const checkoutController = {
  renderCheckout(req, res) {
    req.session.previousUrl = req.originalUrl;
    res
      .status(501)
      .render("pages/error", { title: "501!", session: req.session });
  },
};

module.exports = checkoutController;
