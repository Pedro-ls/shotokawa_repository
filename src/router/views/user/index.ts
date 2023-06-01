import { Request, Response } from "express";
import { UserModel, IUser } from "../../../database/schemas/User.model";
import { CategoryModel, ICategory } from "../../../database/schemas/Category.model";

class UserView {

    async store(req: Request, res: Response) {
        // recebe dados
        const userBody = req.body;

        const profile = req.file?.filename
        console.log(userBody)
        // cria documento
        const user = new UserModel({
            name: userBody.name,
            email: userBody.email,
            password: userBody.password,
            categoriesLike:String(userBody.categoriesLike).split(",").map(value => value.trim()), // retorna um array com os valores
            photo: profile
        })
        // salva usuario
        user.save()

        // retorna
        res.status(201).json({
            user,
            message: "Usuario criado com sucesso"
        })
    }

    async get(req: Request, res: Response) {
        // recebe dados
        const { id } = req.params;
        // acha usuario
        const user = await UserModel.findById(id)

        // retorna
        res.status(201).json({
            user,
            message: "Busca feita com sucesso"
        })
    }

    async getCategories(req: Request, res: Response) {
        // recebe dados
        const { id } = req.params;
        // acha usuario
        const user: IUser | null = await UserModel.findById(id)

        if (user == null) {
            return res.status(200).json({
                categories: [],
                message: "Busca feita com sucesso"
            })
        }
        const responses = (user.categoriesLike).flatMap(async (categoryId) => {
            const category: ICategory | null = await CategoryModel?.findById(categoryId);
            if(category){
                return {
                    _id: categoryId,
                    name: category.name
                };
            }

        })
        const categories = await Promise.all(responses)
        const {name, email} = user;
        res.status(200).json({
            user: {
                _id:id,
                name,
                email,
                categoriesLike: categories
            },
            message: "Busca feita com sucesso"
        })
               

    }

    async getAll(req: Request, res: Response){
    // retorna todos os usuarios
    const users = await UserModel.find()

    // retorna
    res.status(201).json({
        users,
        message: "todos os usuarios retornados com sucesso"
    })
}

    async update(req: Request, res: Response){
    // recebe dados
    const userBody: IUser = req.body;
    const { id } = req.params;
    // acha  e atualiza usuario
    const user = await UserModel.findByIdAndUpdate(id, userBody)

    // retorna
    res.status(201).json({
        user,
        message: "Usuario atualizado com sucesso"
    })
}
    async delete (req: Request, res:Response) {
    // recebe dados
    const { id } = req.params;
    // acha  e atualiza usuario
    const user = await UserModel.findByIdAndDelete(id)

    // retorna
    res.status(201).json({
        user,
        message: "Usuario deletado com sucesso"
    })
}
}

export default new UserView()