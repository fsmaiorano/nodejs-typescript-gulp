import { Router, Request, Response, NextFunction } from 'express';
import UserController from './../../controllers/user/user.controller';

export class UserRouter {

    public router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    private getUser(req: Request, res: Response, next: NextFunction) {
        UserController.getUser(req, res, next);
    }

    private getUsers(req: Request, res: Response, next: NextFunction) {
        UserController.getUsers(req, res, next);
    }

    private addUser(req: Request, res: Response, next: NextFunction) {
        UserController.addUser(req, res, next);
    }


    init() {
        this.router.get('/getUser', this.getUser);
        this.router.get('/getUsers', this.getUsers);
        this.router.post('/addUser', this.addUser);
    }

}

export default new UserRouter();