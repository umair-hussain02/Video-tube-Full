import { v2 as cloudinary } from 'cloudinary';
import { config } from './config';
import fs from 'fs';

cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
});

const uploadOnCloudinary = async (localFilePath: string) => {
    try {
        // check the path
        if (!localFilePath) return null;
        // upload function
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        });
        // delete from local stroge
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return response;
    } catch (error) {
        console.error('Cloudinary Upload Error', error);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
    }
};

export { uploadOnCloudinary };
