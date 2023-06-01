import { Request, Response } from "express";
import { CategoryModel, ICategory } from "../../../database/schemas/Category.model";


class CategoryView {
    async store(req:Request, res:Response){
        // recebe dados
        const categoryBody: ICategory = req.body;
        // cria documento
        const category = new CategoryModel({
            name: categoryBody.name,
            description: categoryBody.description
        })
        // salva categoria
        category.save()

        // retorna
        res.status(201).json({
            category,
            message: "Categoria criada com sucesso"
        })
    }

    async get(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha categoria
        const category = await CategoryModel.findById(id)

        // retorna
        res.status(200).json({
            category,
            message: "Busca feita com sucesso"
        })
    }

    async getAll(req:Request, res:Response){
        // retorna todos os usuarios
        const categories = await CategoryModel.find()

        // retorna
        res.status(200).json({
            categories,
            message: "todos as categorias foram retornadas com sucesso"
        })
    }

    async update(req:Request, res:Response){
        // recebe dados
        const categoryBody: ICategory = req.body;
        const { id } = req.params; 
        // acha  e atualiza usuario
        const category = await CategoryModel.findByIdAndUpdate(id, categoryBody)

        // retorna
        res.status(201).json({
            category,
            message: "categoria atualizado com sucesso"
        })
    }
    async delete(req:Request, res:Response){
        // recebe dados
        const { id } = req.params; 
        // acha  e atualiza usuario
        const category = await CategoryModel.findByIdAndDelete(id)

        // retorna
        res.status(201).json({
            category,
            message: "categoria deleta com sucesso"
        })
    }
}

export default new CategoryView()