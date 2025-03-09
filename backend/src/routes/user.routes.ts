import express from 'express';
import { registerUser } from '../controller/user.controller';
import { upload } from '../middlewares/multer';

const userRouter = express.Router();

userRouter.route('/register').post(upload.single('profileImage'), registerUser);

export default userRouter;
