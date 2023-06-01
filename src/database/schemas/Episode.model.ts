import { Schema, model } from "mongoose";

export interface IEpisode{
    title: String;
    description: String;
    photos: [String];
    pages: number;
}

export const episodeSchema = new Schema<IEpisode>({
    title: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    photos: {
        type: [String],
        required:true
    },
    pages: {
        type:Number,
        required: true
    }
})

export const EpisodeModel = model<IEpisode>("EpisodeModel", episodeSchema, "episodes")