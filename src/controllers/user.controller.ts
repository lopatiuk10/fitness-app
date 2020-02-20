import * as express from 'express';
import UserService from '../services/user.service';
 
class UserController {
  public service: UserService=new UserService();

  public callCreateUser = async (request: express.Request, response: express.Response) => {
    let newUser=await this.service.createUser(request);
    response.send(newUser);
  }

  public callGetAllUsers = async (request: express.Request, response:express.Response) => {
    const users = await this.service.getAllUsers(request);
    response.send(users);
  }
}

export default UserController;
