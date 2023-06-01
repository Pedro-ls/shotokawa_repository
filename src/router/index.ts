import express, {Express} from 'express'
import routesPrivate from "./auth.route"
import routesPublic from "./public.route"
import auth from './middlewares/auth'
import constants from '../constants'

import swaggerUi  from 'swagger-ui-express';
import swaggerDocument from './document.swagger'
import path from 'path'




function handle(app: Express){
    // rotas publicas
    app.use(constants.PREFIX, routesPublic)
    // rotas autenticadas
    app.use(constants.PREFIX, auth, routesPrivate)
    app.use("/images", auth,  express.static(path.resolve(__dirname, "..", "..", "uploads")))
    // criar documentação com swagger (A FAZER)
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    return app
}

export default {
    handle
}