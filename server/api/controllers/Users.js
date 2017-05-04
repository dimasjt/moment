import User from './../../models/User';

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (e) {
    res.status(400).json({ errors: ['invalid'] });
  }
};
