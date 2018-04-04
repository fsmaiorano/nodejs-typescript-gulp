import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import { GithubRouter } from './api/routes/github/github.routes';

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
        this.express.use('/api/github', new GithubRouter().router);
    }

}

export default new App().express;