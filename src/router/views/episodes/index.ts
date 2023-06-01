import { Request, Response } from "express";
import { EpisodeModel, IEpisode } from "../../../database/schemas/Episode.model";

class EpisodeView {
    async store(req:Request, res:Response){
        // recebe dados
        const episodeBody: IEpisode = req.body;
        // cria documento
        const episode = new EpisodeModel({
            title: episodeBody.title,
            description: episodeBody.description,
            pages: episodeBody.pages,
            photos: episodeBody.photos
        })
        // salva Episodio
        episode.save()

        // retorna
        res.status(201).json({
            episode,
            message: "Episodio criado com sucesso"
        })
    }

    async get(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha episodio
        const episode = await EpisodeModel.findById(id)

        // retorna
        res.status(200).json({
            episode,
            message: "Busca feita com sucesso"
        })
    }

    async getAll(req:Request, res:Response){
        // retorna todos os episodios
        const categories = await EpisodeModel.find()

        // retorna
        res.status(200).json({
            categories,
            message: "todos os episodios foram retornadas com sucesso"
        })
    }

    async update(req:Request, res:Response){
        // recebe dados
        const episodeBody: IEpisode = req.body;
        const { id } = req.params; 
        // acha  e atualiza usuario
        const episodio = await EpisodeModel.findByIdAndUpdate(id, episodeBody)

        // retorna
        res.status(201).json({
            episodio,
            message: "episodio atualizado com sucesso"
        })
    }
    async delete(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha  e atualiza episodio
        const episode = await EpisodeModel.findByIdAndDelete(id)

        // retorna
        res.status(201).json({
            episode,
            message: "episodio deletado com sucesso"
        })
    }
}

export default new EpisodeView()