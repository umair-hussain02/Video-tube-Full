import { Request, Response } from 'express';

const registerUser = async (req: Request, res: Response) => {
    // Get Details from front

    console.log(req.body);

    // const { firstName, password } = req.body;
    // console.log(password);

    // Validate Details

    // Check if user exists or not

    // Check for Image

    // upload Image to cloudinary

    // create entry in db

    // remove password and refresh token

    // Check for user creation

    // Return Response
    res.json({
        message: 'This is usercontroller...!',
        req_body: req.body,
    });
};

export { registerUser };
