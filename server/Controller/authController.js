import User from '../Models/userModel.js';

export const signup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password || username === ' ' || password === ' ') {
    return res.status(400).json({ msg: 'Please enter all the fields' });
  }
  const newUser = new User({
    username,
    password,
  });

  const savedUser = await newUser.save();
  try {
    if (!savedUser) {
      return res.status(400).json({ msg: 'Something went wrong' });
    }
    res.status(200).json({ user: savedUser, msg: 'Signup successful' });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
