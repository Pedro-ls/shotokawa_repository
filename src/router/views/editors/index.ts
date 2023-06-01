import { Request, Response } from "express";
import { EditorModel, IEditor } from "../../../database/schemas/Editor.model";


class AuthorView {
    async store(req:Request, res:Response){
        // recebe dados
        const editorBody: IEditor = req.body;
        // cria editor
        const editor = new EditorModel({
            name:editorBody.name,
            description: editorBody.description,
            city: editorBody.city,
            country:editorBody.country,
            photo:editorBody.photo
        })
        // salva editor
        editor.save()

        // retorna
        res.status(201).json({
            editor,
            message: "Editor criado com sucesso"
        })
    }

    async get(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha editor
        const editor = await EditorModel.findById(id)

        // retorna
        res.status(200).json({
            editor,
            message: "Busca feita com sucesso"
        })
    }

    async getAll(req:Request, res:Response){
        // retorna todos os editores
        const editors = await EditorModel.find()

        // retorna
        res.status(200).json({
            editors,
            message: "todos os editores foram retornados com sucesso"
        })
    }

    async update(req:Request, res:Response){
        // recebe dados
        const editorBody: IEditor = req.body;
        const { id } = req.params; 
        // acha  e atualiza editor
        const editor = await EditorModel.findByIdAndUpdate(id, editorBody)

        // retorna
        res.status(201).json({
            editor,
            message: "editor atualizado com sucesso"
        })
    }
    async delete(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha  e atualiza editor
        const editor = await EditorModel.findByIdAndDelete(id)

        // retorna
        res.status(201).json({
            editor,
            message: "editor deletado com sucesso"
        })
    }
}

export default new AuthorView()