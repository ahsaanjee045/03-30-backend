const User = require("../models/user.model");
const ApiResponse = require("../utils/ApiResponse");

const registerUser = async (req, res, next) => {
    try {
        let data = req.body;
        let newuser = await User.create({
            username: "testusername",
            password: "testpassword",
            email: "testemail@gmail.com",
        });

        return ApiResponse(res, 201, "User created successfully", newuser);
    } catch (error) {
        next(error);
    }
};

module.exports = registerUser;
