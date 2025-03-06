import { Request, Response } from 'express';

const registerUser = async (req: Request, res: Response) => {
    res.json({
        message: 'This is usercontroller...!',
    });
};

export { registerUser };
