import { Schema, model } from "mongoose";

export interface IUser{
    name: String;
    email: String;
    password: String;
    categoriesLike: [String];
    photo: String;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    categoriesLike: {
        type: [String],
        required: false
    }
});

export const UserModel = model<IUser>("UserModel", userSchema, "users")


