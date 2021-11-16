const checkoutController = {
  renderCheckout(req, res) {
    res.status(501).render("pages/error", { title: "501!" });
  },
};

module.exports = checkoutController;
