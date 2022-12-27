/*
    helper file, edit this file to write your helper
*/

import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import multer from "multer"
import dotenv from "dotenv"
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params : {
        folder : process.env.FOLDER_NAME
    }
})

const upload = multer({ storage:storage })
export default upload