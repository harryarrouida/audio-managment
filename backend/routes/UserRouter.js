const express = require("express")
const userRoute = express.Router()

const {userRegister, userLogin, getUser} = require("../controllers/userController")
const isUser = require("../middlewars/isUser")

userRoute.post('/register', userRegister)
userRoute.post('/login', userLogin)
userRoute.get('/getUser', isUser, getUser)

module.exports = userRoute