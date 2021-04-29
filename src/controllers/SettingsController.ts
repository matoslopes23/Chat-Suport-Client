import {Request, Response} from "express"
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(request:Request, response:Response){
        const {chat, username} = request.body;
        
        const settingsService = new SettingsService();
        try {
            const settings = await settingsService.create({chat, username})
            return response.json(settings)
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            })
        }
    }
    async findByUsername(request:Request, response:Response){
        const {username} = request.params;
        const settingsService = new SettingsService();

        const serttings = await settingsService.findByUsername(username);

        return response.json(serttings);
    }
    async update(request:Request, response:Response){
        const {username} = request.params;
        const { chat } = request.body;
        const settingsService = new SettingsService();

        const serttings = await settingsService.update(username, chat);

        return response.json(serttings);
    }
}

export { SettingsController }