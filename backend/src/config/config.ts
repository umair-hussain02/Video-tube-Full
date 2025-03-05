import { config as conf } from 'dotenv';

conf();

const _config = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    databaseUrl: process.env.DB_URL,
};

export const config = Object.freeze(_config);
