import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserRoleDto from '../dto/user_role.dto';
import UserRoleController from '../controllers/user_role.controller';

 
class UserRoleRoute implements Controller {
  public path = '/roles';
  public athletePass="/athletes"
  public router = express.Router();
  private controller:UserRoleController=new UserRoleController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserRoleDto), this.controller.callCreateUserRole);
    this.router.get(this.path, this.controller.callGetAllUserRoles);
    this.router.get(this.athletePass, this.controller.callGetAllAthletes);
    this.router.get(`${this.path}/:id`, this.controller.callGetUserRoleById);
  }
}

export default UserRoleRoute;