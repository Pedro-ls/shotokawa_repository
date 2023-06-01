import { Router } from 'express'
import UserView from './views/user'
import { uploadFile } from '../lib/uploadFile'

const routesPublic = Router()

// rotas publicas

routesPublic.post("/users", uploadFile("users").single("photo"), UserView.store)

export default routesPublic