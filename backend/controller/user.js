exports.createUser = (req, res) => {
  req.json({ user: req.body });
};
