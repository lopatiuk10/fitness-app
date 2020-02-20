import * as express from 'express';
import UserRoleService from '../services/user_role.service';

 
class UserRoleController{

  private service=new UserRoleService();

  public callCreateUserRole = async (request: express.Request, response: express.Response) => {
    const newUserRole = await this.service.createUserRole(request);
    response.send(newUserRole);
  } 

  public callGetAllUserRoles = async (request: express.Request, response: express.Response) => {
    const userRole = await this.service.getAllUserRoles(request);
    response.send(userRole);
  }

  public callGetAllAthletes = async (request: express.Request, response: express.Response) => {
    const athletes = await this.service.getAllAthletes(request);
    response.send(athletes);
  }

  public callGetUserRoleById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const userRole = await this.service.getUserRoleById(request);
    response.send(userRole);
  }
}

export default UserRoleController;