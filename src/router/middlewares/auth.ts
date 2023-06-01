import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import constants from "../../constants";
// logica de autenticação
export default function(req:Request, res:Response, next:NextFunction){
   const { authorization }  = req.headers
    if(authorization){
        const token = authorization?.replace("Bearer", "").trim()
        const payload = jwt.verify(token, constants.JWT_KEY_SECRET)
        if(!!!payload){
            req.body.user_auth = payload
            next()
        }
    }
    res.json({
        message: "voce não tem permissão para acessar o sistema, faça login novamente"
    })    
}