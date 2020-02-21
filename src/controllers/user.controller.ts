import * as express from 'express';
import UserService from '../services/user.service';
 
class UserController {
  public service: UserService=new UserService();

  public callCreateUser = async (request: express.Request, response: express.Response) => {
    let newUser=await this.service.createUser(request.body);
    response.send(newUser);
  }

  public callGetAllUsers = async (request: express.Request, response:express.Response) => {
    const users = await this.service.getAllUsers();
    response.send(users);
  }

  public callGetAthletes = async (request: express.Request, response:express.Response) => {
    const athletes = await this.service.getAthletes();
    response.send(athletes);
  }
}

export default UserController;
