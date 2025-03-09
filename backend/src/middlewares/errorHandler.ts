import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { config } from '../config/config';

const errorHandler = (
    error: HttpError,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const statusCode = error.statusCode || error.status || 500;
    res.status(statusCode).json({
        message: error.message || 'Something went wrong...!',
        stack: config.env === 'development' ? error.stack : '',
    });
};

export default errorHandler;
