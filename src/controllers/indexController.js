const indexController = {
  renderIndex(req, res) {
    req.session.previousUrl = req.originalUrl;
    res.render("pages/index", { title: "Home", session: req.session });
  },
};

module.exports = indexController;
