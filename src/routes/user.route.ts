import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from '../dto/user.dto';
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';
 
class UserRoute implements Controller {
  public path = '/users';
  public router = express.Router();
  private controller: UserController=new UserController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserDto), this.controller.callCreateUser);
    this.router.get(this.path, this.controller.callGetAllUsers);
  }
}

export default UserRoute;