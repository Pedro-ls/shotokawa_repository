import { Schema, model } from "mongoose";

export interface IAuthor {
    name: String;
    description: String;
    photo: String;
    city: String;
    country: String;

}
export const AuthorSchema = new Schema<IAuthor>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true}
});


export const AuthorModel = model("AuthorModel", AuthorSchema, "authors")