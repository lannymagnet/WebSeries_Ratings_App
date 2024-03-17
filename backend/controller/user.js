const User = require("../models/user");

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  //Finding if the new user is unique or not.
  const oldUser = await User.findOne({ email });

  if (oldUser) return res.status(401).json({ error: "This email is already in use." });

  const newUser = new User({ name, email, password });
  await newUser.save();

  res.json({ user: newUser });
};
