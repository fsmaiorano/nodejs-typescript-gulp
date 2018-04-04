import { Router, Request, Response, NextFunction } from 'express';
import Handler from './../../services/github/github.handler';

class GithubController {

  constructor() {

  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    const version = req.headers.via;
    const service = Handler.versionHandler(version);
    const response = await service.getUser(req.body.username);
    res.send(response.data);
  }

}

export default new GithubController();

