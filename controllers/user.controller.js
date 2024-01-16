const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const { uploadOnCloudinary, deleteOnCloudinary } = require("../utils/cloudinary");

const registerUser = async (req, res, next) => {
    try {
  
        let file = req?.file?.path;
        console.log(file);

        // upload file on cloudinary
        let result = await uploadOnCloudinary(file)
        console.log(result.public_id)
        console.log(result.secure_url)

        return ApiResponse(res, 201, "User created successfully", {
            public_id : result.secure_url,
            url : result.secure_url
        });
    } catch (error) {
        next(error);
    }
};

module.exports = registerUser;
