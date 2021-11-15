const loginController = {
    renderlogin(req, res) {
        res.render("pages/login", { title: "login" })
    }
}

module.exports = loginController