import {request, Router} from "express"
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersContrroller";
import { MessagesController} from "./controllers/MessagesController"


const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();
/**
 * tipos de parametros
 * Routes Params => paramentos de rotas
 * Query params => Filtros de buscas
 * Body params =>{
 * 
 * }
 */

routes.post("/settings",settingsController.create);
routes.get("/settings/:username",settingsController.findByUsername);
routes.put("/settings/:username",settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export {routes};