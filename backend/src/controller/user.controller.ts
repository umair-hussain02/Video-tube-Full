import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';
import { uploadOnCloudinary } from '../config/cloudinary';

const registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    // Get Details from front
    const { fullName, userName, email, password } = req.body;

    // Validate Details
    if (!fullName || !email || !password || !userName) {
        const error = createHttpError(400, 'All * are required...!');
        return next(error);
    }

    // Check if user exists or not
    const exitedUser = await User.findOne({
        $or: [{ userName: userName }, { email: email }],
    });
    if (exitedUser) {
        const error = createHttpError(
            400,
            'User with Email Or Username already exits...!',
        );
        return next(error);
    }

    // Check for Image
    const profileImagepath = req.file?.path;

    // upload Image to cloudinary
    let proImage;
    if (profileImagepath) {
        proImage = await uploadOnCloudinary(profileImagepath);
    }
    // console.log(proImage?.url);

    const hashedPassword = await bcrypt.hash(password, 10);

    // create entry in db

    const user = await User.create({
        fullName,
        userName,
        email,
        password: hashedPassword,
        profileImage: proImage?.url,
    });

    // remove password and refresh token
    const generatedUser = User.findById(user._id).select('-password');

    // Check for user creation
    if (!generatedUser) {
        const error = createHttpError(
            500,
            'Something is went wrong while registering the user...!',
        );
        next(error);
    }
    // console.log(generatedUser);

    // Return Response
    res.json({
        message: 'User Registered Successfully...',
    });
};

export { registerUser };
