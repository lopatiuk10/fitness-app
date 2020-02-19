import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserRoleDto from '../dto/user_role.dto';
import User from '../models/user.entity';
import UserRole from '../models/user_role.entity';

class UserRoleService{

    private userRoleRepository = getRepository(UserRole);

    public createUserRole = async (request: express.Request, response: express.Response) => {
        const userRoleData: CreateUserRoleDto = request.body;
        const newUserRole = this.userRoleRepository.create(userRoleData);
        await this.userRoleRepository.save(newUserRole);
        response.send(newUserRole);
    }

    public getAllUserRoles = async (request: express.Request, response: express.Response) => {
        const users = await this.userRoleRepository.find();
        response.send(users);
    }

    public getUserRoleById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id = request.params.id;
        const userRole = await this.userRoleRepository.findOne(id);
        if (userRole) {
          response.send(userRole);
        } else {
            response.send("Not found "+id);
         // next(new PostNotFoundException(id));
        }
    }
}

export default UserRoleService;