
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

//Routers
import { GithubRouter } from './api/routes/github/github.routes';
import { UserRouter } from './api/routes/user/user.routes';

//MongoDb
import database from './database/database';

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.database();
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
        this.express.use('/api/user', new UserRouter().router);
    }

    private database(): void {
        database.initDatabase();
    }

}

export default new App().express;