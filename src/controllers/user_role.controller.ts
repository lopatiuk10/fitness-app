import * as express from 'express';
import UserRoleService from '../services/user_role.service';

 
class UserRoleController{

  private service=new UserRoleService();

  public callCreateUserRole = async (request: express.Request, response: express.Response) => {
    const newUserRole = await this.service.createUserRole(request.body);
    response.send(newUserRole);
  } 

  public callGetAllUserRoles = async (request: express.Request, response: express.Response) => {
    const userRole = await this.service.getAllUserRoles();
    response.send(userRole);
  }

  public callGetUserRoleById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const userRole = await this.service.getUserRoleById(request.params);
    response.send(userRole);
  }
}

export default UserRoleController;