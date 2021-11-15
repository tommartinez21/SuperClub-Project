const checkoutController = {
    renderCheckout(req, res) {
        res.render("pages/checkout", { title: "Pago" })
    }
}

module.exports = checkoutController