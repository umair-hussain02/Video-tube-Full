import mongoose from 'mongoose';
import { config } from './config';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Connected to database sucessfully!');
        });
        mongoose.connection.on('error', (err) => {
            console.log('Error in Database Connection!', err);
        });
        await mongoose.connect(config.databaseUrl as string);
    } catch (err) {
        console.log('Failed to connect to Database ', err);
        process.exit(1);
    }
};

export default connectDB;
