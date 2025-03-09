import { config as conf } from 'dotenv';

conf();

const _config = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    databaseUrl: process.env.DB_URL,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
};

export const config = Object.freeze(_config);
