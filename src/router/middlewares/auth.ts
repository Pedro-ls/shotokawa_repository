import { NextFunction, Request, Response } from "express";
// logica de autenticação
export default function(req:Request, res:Response, next:NextFunction){
   console.log("FAKE AUTH")
    return next()
}