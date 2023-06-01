import express, { json } from 'express'
import router from './router'
import constants from './constants'
import connection from './database/connection'
// criação do servidor express
connection().then(() => {
    console.log("MONGODB started!!!")
    const serverExpress = express()

    // json suport
    serverExpress.use(json())
    
    // criação de rotas pattern factory
    
    const app = router.handle(serverExpress)
    app.listen(3333,  () => {
        console.log(`Listen: ${constants.SERVER_URL}`)
    })
})

