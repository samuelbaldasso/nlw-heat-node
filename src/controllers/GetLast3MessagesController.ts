import { Request, Response } from "express";
import {GetLast3Messages} from "../services/GetLast3Messages";

class GetLast3MessagesController {
    async handle(req: Request, res: Response){
        const service = new GetLast3Messages();
        const result = await service.execute()
        return res.json(result);
    }
}

export {GetLast3MessagesController}