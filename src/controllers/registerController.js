const registerController = {
  renderRegister(req, res) {
    req.session.previousUrl = req.originalUrl;
    res.render("pages/register", { title: "register", session: req.session });
  },
};

module.exports = registerController;
