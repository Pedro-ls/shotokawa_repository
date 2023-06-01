import { Router } from 'express'

import UsersView from './views/user'
import CategoryView from './views/category'

import BookView from './views/books'
import EditorView from './views/editors'
import AuthorView from './views/authors'
import EpisodeView from './views/episodes'

import { uploadFile } from '../lib/uploadFile'

const routesPrivate = Router()

/**
 * Rotas Autenticados 
 **/

// CRUD users
routesPrivate.get("/users", UsersView.getAll)
routesPrivate.get("/users/:id", UsersView.get)
routesPrivate.put("/users/:id", UsersView.update)
routesPrivate.delete("/users/:id", UsersView.delete)

// CRUD categories
routesPrivate.get("/categories", CategoryView.getAll)
routesPrivate.post("/categories", CategoryView.store)
routesPrivate.get("/categories/:id", CategoryView.get)
routesPrivate.put("/categories/:id", CategoryView.update)
routesPrivate.delete("/categories/:id", CategoryView.delete)

// CRUD Books (comics) manga

routesPrivate.get("/comics", BookView.getAll)
routesPrivate.post("/comics", uploadFile("comics").fields([
    {
        name: "cover",
        maxCount: 1
    },
    {
        name: "front",
        maxCount: 1
    }
]),BookView.store)
routesPrivate.get("/comics/:id", BookView.get)
routesPrivate.put("/comics/:id", BookView.update)
routesPrivate.delete("/comics/:id", BookView.delete)

// CRUD episodes
routesPrivate.get("/episodes", EpisodeView.getAll)

routesPrivate.post("/episodes",uploadFile("episodes").fields([
    {
        name: "photos"
    }
]), EpisodeView.store)

routesPrivate.get("/episodes/:id", EpisodeView.get)
routesPrivate.put("/episodes/:id", EpisodeView.update)
routesPrivate.delete("/episodes/:id", EpisodeView.delete)

// CRUD authors
routesPrivate.get("/authors", AuthorView.getAll)
routesPrivate.post("/authors", AuthorView.store)
routesPrivate.get("/authors/:id", AuthorView.get)
routesPrivate.put("/authors/:id", AuthorView.update)
routesPrivate.delete("/authors/:id", AuthorView.delete)

// CRUD editors
routesPrivate.get("/editors", EditorView.getAll)
routesPrivate.post("/editors", EditorView.store)
routesPrivate.get("/editors/:id", EditorView.get)
routesPrivate.put("/editors/:id", EditorView.update)
routesPrivate.delete("/editors/:id", EditorView.delete)

// All like categories user talll.... :id
routesPrivate.get("/users/:id/categories", UsersView.getCategories)



export default routesPrivate