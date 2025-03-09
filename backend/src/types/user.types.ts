import mongoose from 'mongoose';

export interface IUser {
    _id?: mongoose.Types.ObjectId;
    fullName: string;
    userName: string;
    email: string;
    password: string;
    profileImage: string;
    createdAt?: Date;
    updatedAt?: Date;
}
