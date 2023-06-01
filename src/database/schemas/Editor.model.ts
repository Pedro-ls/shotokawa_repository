import { Schema, model } from "mongoose";

export interface IEditor {
    name: String;
    city: String;
    photo: String;
    country: String;
    description: String;

}
export const EditorSchema = new Schema<IEditor>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true}
});


export const EditorModel = model("EditorModel", EditorSchema, "editors")