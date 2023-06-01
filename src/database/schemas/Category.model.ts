import { Schema, model } from "mongoose";

export interface ICategory {
    name: String;
    description: String;
}
export const categorySchema = new Schema<ICategory>({
    name: String,
    description: String,
});


export const CategoryModel = model("CategoryModel", categorySchema, "categories")