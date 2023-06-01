import { Schema, model } from "mongoose";

export interface IBook{
    title: String;
    description: String;
    copyright: string;
    
    cover_photo: String;
    front_photo: String;
    
    episodes_by_book: number;
    
    authors: [String];
    editors: [String];
    episodes: [String];

    category: String;
}



const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    cover_photo: {
        type: String,
        required: true
    },
    front_photo: {
        type: String,
        required: true
    },
    
    episodes_by_book: {
        type: Number,
        required: true
    },
    
    authors: {
        type: [String],
        required: true
    },
    editors: {
        type: [String],
        required: true
    },
    episodes: {
        type: [String],
        required: true
    },
    copyright: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    }
});

export const BookModel = model<IBook>("BookModel", bookSchema, "books")


