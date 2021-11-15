const registerController = {
  renderRegister(req, res) {
    res.render("pages/register", { title: "register", session: req.session });
  },
};

module.exports = registerController;
