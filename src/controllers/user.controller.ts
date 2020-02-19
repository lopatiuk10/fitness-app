import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from '../dto/user.dto';
import UserService from '../services/user.service';
 
class UserController implements Controller {
  public path = '/users';
  public router = express.Router();
  private service: UserService=new UserService();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserDto), this.service.createUser);
    this.router.get(this.path, this.service.getAllUsers);
  }
 
  
}

export default UserController;
