import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/user.types';

const userSchema = new Schema<IUser>(
    {
        fullName: {
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
            default:
                'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1741544515~exp=1741548115~hmac=eef6e66a9e164784b2227d2ccc7ef1f68e58ccda71de6573f9a0a9f8710a0db1&w=996',
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

// userSchema.pre('save',
//     async function (this: Document & IUser, next: NextFunction) {
//         // Generate username if it's not set
//         if (!this.userName) {
//             const generatedUserName = `${this.firstName.toLowerCase()}${this.lastName.toLowerCase()}`;
//             this.userName = generatedUserName;
//         }

//         // Hash the password if it's being modified
//         if (this.isModified('password')) {
//             this.password = await bcrypt.hash(this.password, 10);
//         }

//         next();
//     },
// );

export const User = mongoose.model<IUser>('User', userSchema);
