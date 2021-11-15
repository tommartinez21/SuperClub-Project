const registerController = {
    renderRegister(req, res) {
        res.render("pages/register", { title: "register" })
    }
}

module.exports = registerController