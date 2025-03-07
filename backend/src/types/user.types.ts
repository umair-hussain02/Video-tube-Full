import mongoose from 'mongoose';

export interface User {
    _id?: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    profileImage: string;
    createdAt?: Date;
    updatedAt?: Date;
}
