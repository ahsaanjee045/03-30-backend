const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        console.log(localFilePath);
        if (!localFilePath) return null;

        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: "uploads",
        });
        fs.unlinkSync(localFilePath);
        return result;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return error;
    }
};



const deleteOnCloudinary = async (public_id, resource_type="image") => {
    try {
        if (!public_id) return null;

       
        const result = await cloudinary.uploader.destroy(public_id, {
            resource_type: `${resource_type}`
        });
        return result
    } catch (error) {
        console.log("delete on cloudinary failed", error);
        return error;
    }
};

module.exports =  { uploadOnCloudinary, deleteOnCloudinary };
