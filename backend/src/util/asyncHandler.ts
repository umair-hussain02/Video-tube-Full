import { NextFunction, Request, Response } from 'express';

const asyncHandler = (asyncFn) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(asyncFn(req, res, next)).catch((err) => {
            next(err);
        });
    };
};

export default asyncHandler;
