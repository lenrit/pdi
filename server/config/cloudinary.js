const cloudinary= require ("cloudinary").v2;
require ("dotenv").config ();

cloudinary.config ({
    cloud_name: "dxepfcsgj",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports= cloudinary;