import { Request, Response } from "express";
import { AuthorModel, IAuthor } from "../../../database/schemas/Author.model";


class AuthorView {
    async store(req:Request, res:Response){
        // recebe dados
        const authorBody: IAuthor = req.body;
        // cria documento
        const author = new AuthorModel({
            name:authorBody.name,
            description: authorBody.description,
            city: authorBody.city,
            country:authorBody.country,
            photo:authorBody.photo
        })
        // salva categoria
        author.save()

        // retorna
        res.status(201).json({
            author,
            message: "Author criado com sucesso"
        })
    }

    async get(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha categoria
        const author = await AuthorModel.findById(id)

        // retorna
        res.status(200).json({
            author,
            message: "Busca feita com sucesso"
        })
    }

    async getAll(req:Request, res:Response){
        // retorna todos os usuarios
        const authors = await AuthorModel.find()

        // retorna
        res.status(200).json({
            authors,
            message: "todos os autores foram retornados com sucesso"
        })
    }

    async update(req:Request, res:Response){
        // recebe dados
        const authorBody: IAuthor = req.body;
        const { id } = req.params; 
        // acha  e atualiza usuario
        const author = await AuthorModel.findByIdAndUpdate(id, authorBody)

        // retorna
        res.status(201).json({
            author,
            message: "author atualizado com sucesso"
        })
    }
    async delete(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha  e atualiza usuario
        const author = await AuthorModel.findByIdAndDelete(id)

        // retorna
        res.status(201).json({
            author,
            message: "autor deletado com sucesso"
        })
    }
}

export default new AuthorView()