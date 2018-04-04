import { Router, Request, Response, NextFunction } from 'express';
import GithubController from './../../controllers/github/github.controller';

export class GithubRouter {

    public router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    private getUser(req: Request, res: Response, next: NextFunction) {
        GithubController.getUser(req, res, next);
    }


    init() {
        this.router.post('/getUser', this.getUser);
    }

}

export default new GithubRouter();