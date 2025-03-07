import mongoose, { Schema } from 'mongoose';
import { User } from '../types/user.types';
import { NextFunction } from 'express';
import bcrypt from 'bcrypt';

const userSchema = new Schema<User>(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        userName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        profileImage: {
            type: String,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);

userSchema.pre('save', async function (next: NextFunction) {
    if (!this.userName) {
        const generatedUserName = `${this.firstName.toLowerCase()}${this.lastName.toLowerCase}`;
        this.userName = generatedUserName;
    }
    next();
});

userSchema.pre('save', async function (next: NextFunction) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

export const User = mongoose.model<User>('User', userSchema);
