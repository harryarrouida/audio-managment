const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Playlist = require("../models/Playlist");

const userLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const matchResult = await bcrypt.compare(password, user.password);
    if (!matchResult) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = genToken(user._id.toString());
    res.status(200).json({ message: "Logged in", token, user });
  } catch (error) {
    console.error("Error during User login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const userRegister = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ message: "Fields are required" });
    }

    const doesExist = await User.findOne({ username });
    if (doesExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPwd = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPwd });

    if (!user) {
      return res.status(400).json({ message: "Failed to create User" });
    }

    const token = genToken(user._id.toString());
    res.status(201).json({ message: "User created", token, user });
  } catch (error) {
    console.error("Error during User registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const genToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const getUser = async (req, res) => {
  try {
    const user = req.user
    return res.status(201).json(user)
  } catch (error) {
    return res.status(400).json({message: "can't get the user info"})
  }
};

module.exports = { userLogin, userRegister, getUser}