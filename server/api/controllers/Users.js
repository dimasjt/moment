import User from './../../models/User';

exports.register = async (req, res) => {
  const { email, password } = req.body;
  res.status(201).json({ user: { id: 1 } });
};
