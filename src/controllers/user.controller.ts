import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from '../users/user.dto';
import User from '../models/user.entity';
 
class UsersController implements Controller {
  public path = '/users';
  public router = express.Router();
  private userRepository = getRepository(User);
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserDto), this.createUser);
    this.router.get(this.path, this.getAllUsers);
  }
 
  private createUser = async (request: express.Request, response: express.Response) => {
    const userData: CreateUserDto = request.body;
    const newUser = this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    response.send(newUser);
  }

  private getAllUsers = async (request: express.Request, response: express.Response) => {
    const users = await this.userRepository.find();
    response.send(users);
  }
}

export default UsersController;
