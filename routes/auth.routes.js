const registerUser = require("../controllers/user.controller")

const router = require("express").Router()


router.get("/register", registerUser)

module.exports = router