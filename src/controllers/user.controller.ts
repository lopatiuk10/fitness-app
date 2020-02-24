import * as express from 'express';
import UserService from '../services/user.service';
 
class UserController {
  public service: UserService = new UserService();

  public create = async (request: express.Request, response: express.Response) => {
    let newUser = await this.service.create(request.body);
    response.send(newUser);
  }

  public getAll = async (request: express.Request, response:express.Response) => {
    const users = await this.service.getAll();
    response.send(users);
  }

  public getAthletes = async (request: express.Request, response:express.Response) => {
    const athletes = await this.service.getAthletes();
    response.send(athletes);
  }
}

export default UserController;
