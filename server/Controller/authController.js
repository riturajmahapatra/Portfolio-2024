import jwt from 'jsonwebtoken';
import User from '../Models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie('token', token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({ success: true, msg: 'Logged in successfully' });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({ success: true, msg: 'Logged Out successfully' });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne().select('-password -email');
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};
export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { intro, about, username, password, email } = req.body;

    if (intro) {
      user.intro = intro;
    }
    if (about) {
      user.about = about;
    }
    if (username) {
      user.username = username;
    }
    if (password) {
      user.password = password;
    }
    if (email) {
      user.email = email;
    }
    await user.save();
    res.status(200).json({ success: true, msg: 'user updated successfully' });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

export const addExperience = async (req, res) => {
  try {
    const { title, company, location, description, icon, date } = req.body;
    const user = await User.findById(req.user._id);
    user.experiences.unshift({
      title,
      company,
      location,
      description,
      icon,
      date,
    });
    await user.save();

    res
      .status(200)
      .json({ success: true, msg: 'Added Experience successfully' });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};
