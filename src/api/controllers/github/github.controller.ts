import { Router, Request, Response, NextFunction } from 'express';
import githubServices from './../../services/github/v1/github.services';

class GithubController {

  constructor() {

  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    const response = await githubServices.getUser(req.body);
  }

}

export default new GithubController();

