import { Request, Response } from "express";
import { UserModel, IUser } from "../../../database/schemas/User.model";
import { CategoryModel, ICategory } from "../../../database/schemas/Category.model";
import bcript from 'bcryptjs'
import jwt from "jsonwebtoken";
import constants from "../../../constants";
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
            password: await bcript.hash(String(userBody.password), 8),
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

    async login(req:Request, res:Response){
        const { email, password } = req.body;

        const user = await UserModel.findOne({
            email
        })
        if(user){
            if(await bcript.compare(password, String(user.password))){
                const expiresIn = "1d" 
                const payload = {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    photo: user.photo   
                }
                const token = jwt.sign(payload, constants.JWT_KEY_SECRET, {
                    expiresIn 
                })

                res.json({
                    token,
                    user: payload,
                    expiresIn,
                    message: "Logado com sucesso"
                })
            }
        }
    }
    async getProfile(req:Request, res:Response){
        res.json(req.body.user_auth)
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

    if(userBody.password){
        userBody.password = await bcript.hash(String(userBody.password), 8)
    }
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