const express = require("express");
const adminRoute = express.Router();

const {
  adminLogin,
  adminRegister,
  getAdmin,
} = require("../controllers/adminController");
const isAdmin = require("../middlewars/isAdmin");

adminRoute.post("/login", adminLogin);
adminRoute.post("/register", isAdmin, adminRegister);
adminRoute.get("/getAdmin", isAdmin, getAdmin);

module.exports = adminRoute;
