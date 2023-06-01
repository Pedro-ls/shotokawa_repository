import {Express} from 'express'
import routesPrivate from "./auth.route"
import routesPublic from "./public.route"
import auth from './middlewares/auth'
import constants from '../constants'

import swaggerUi  from 'swagger-ui-express';
import swaggerDocument from './document.swagger'




function handle(app: Express){
    // rotas publicas
    app.use(constants.PREFIX, routesPublic)
    // rotas autenticadas
    app.use(constants.PREFIX, auth, routesPrivate)

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    return app
}

export default {
    handle
}