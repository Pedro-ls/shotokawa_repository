import { Request, Response } from "express";
import { BookModel, IBook } from "../../../database/schemas/Book.model";


class BookView {
    async store(req:Request, res:Response){
        // recebe dados
        const bookBody: IBook = req.body;
        // cria documento
        const book = new BookModel({
            title: bookBody.title,
            description: bookBody.description,
            copyright: bookBody.copyright,
            
            cover_photo: bookBody.cover_photo,
            front_photo: bookBody.front_photo,
            
            episodes_by_book: bookBody.episodes_by_book,
            
            authors: bookBody.authors,
            editors: bookBody.editors,
            episodes: bookBody.episodes,
        
            category: bookBody.category
        })
        // salva manga
        book.save()

        // retorna
        res.status(201).json({
            book,
            message: "manga criado com sucesso"
        })
    }

    async get(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha manga
        const book = await BookModel.findById(id)

        // retorna
        res.status(200).json({
            book,
            message: "Busca feita com sucesso"
        })
    }

    async getAll(req:Request, res:Response){
        // retorna todos os mangas
        const books = await BookModel.find()

        // retorna
        res.status(200).json({
            books,
            message: "todos os mangas foram retornadas com sucesso"
        })
    }

    async update(req:Request, res:Response){
        // recebe dados
        const bookBody: IBook = req.body;
        const { id } = req.params; 
        // acha  e atualiza manga
        const book = await BookModel.findByIdAndUpdate(id, bookBody)

        // retorna
        res.status(201).json({
            book,
            message: "manga atualizado com sucesso"
        })
    }
    async delete(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha  e atualiza manga
        const book = await BookModel.findByIdAndDelete(id)

        // retorna
        res.status(201).json({
            book,
            message: "manga deletado com sucesso"
        })
    }
}

export default new BookView()