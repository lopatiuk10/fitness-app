import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserRoleDto from '../dto/user_role.dto';
import UserRoleService from '../services/user_role.service';

 
class UserRoleController implements Controller {
  public path = '/roles';
  public router = express.Router();
  private service:UserRoleService=new UserRoleService();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateUserRoleDto), this.service.createUserRole);
    this.router.get(this.path, this.service.getAllUserRoles);
    this.router.get(`${this.path}/:id`, this.service.getUserRoleById);
  }
}

export default UserRoleController;