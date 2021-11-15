const indexController = {
    renderIndex(req, res) {
        res.render("pages/index", { title: "Home" })
    }
}

module.exports = indexController