const indexController = {
  renderIndex(req, res) {
    res.render("pages/index", { title: "Home", session: req.session });
  },
};

module.exports = indexController;
