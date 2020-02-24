import * as express from 'express';
import Route from '../interfaces/route.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from '../dto/user.dto';
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';
 
class UserRoute implements Route {
  public path = '/users';
  public athletesPath = "/athletes";
  public router = express.Router();
  private controller: UserController = new UserController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserDto), this.controller.create);
    this.router.get(this.path, this.controller.getAll);
    this.router.get(this.athletesPath, this.controller.getAthletes);
  }
}

export default UserRoute;