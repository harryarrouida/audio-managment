const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const matchResult = await bcrypt.compare(password, admin.password);
    if (!matchResult) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = genToken(admin._id.toString());
    res.status(200).json({ message: "Logged in", token, admin });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const adminRegister = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ message: "Fields are required" });
    }

    const doesExist = await Admin.findOne({ username });
    if (doesExist) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPwd = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ username, password: hashedPwd });

    if (!admin) {
      return res.status(400).json({ message: "Failed to create admin" });
    }

    const token = genToken(admin._id.toString());
    res.status(201).json({ message: "Admin created", token, admin });
  } catch (error) {
    console.error("Error during admin registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const genToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const getAdmin = async (req, res) => {
  try {
    const admin = req.admin
    return res.status(201).json(admin)
  } catch (error) {
    return res.status(400).json({message: "can't get the admin info"})
  }
};

module.exports = { adminLogin, adminRegister, getAdmin};
