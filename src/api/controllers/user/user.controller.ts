import { User } from './../../../models/user/user.model';
import { Router, Request, Response, NextFunction } from 'express';
import Handler from './../../services/user/user.handler';


class UserController {

    constructor() {
    }

    async getUser(req: Request, res: Response, next: NextFunction) {
        const version = req.headers.via;
        const service = Handler.versionHandler(version);
        const response = <User>await service.getUser(parseInt(req.query.id));
        res.send(response);
    }

    async getUsers(req: Request, res: Response, next: NextFunction) {
        const version = req.headers.via;
        const service = Handler.versionHandler(version);
        const response = <Array<User>>await service.getUsers();
        res.send(response);
    }

    async addUser(req: Request, res: Response, next: NextFunction) {

    }

}

export default new UserController();

