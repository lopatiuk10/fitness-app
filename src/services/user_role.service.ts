import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserRoleDto from '../dto/user_role.dto';
import UserRole from '../models/user_role.entity';
import Role from '../models/role.entity';

class UserRoleService{

    private userRoleRepository = getRepository(UserRole);
    private roleRepository=getRepository(Role);

    public createUserRole = async (body) => {
        const userRoleData: CreateUserRoleDto = body;
        const newUserRole = this.userRoleRepository.create(userRoleData);
        await this.userRoleRepository.save(newUserRole);
        return (newUserRole);
    }

    public getAllUserRoles = async () => {
        const userRole = await this.userRoleRepository.find();
        return(userRole);
    }

    public getAllAthletes = async () => {
        const role  = await this.roleRepository.findOne({id:1});
        const athletes = await this.userRoleRepository.find({role_:role});
        return(athletes);
    }

    public getUserRoleById = async (request: express.Request) => {
        const id = request.params.id;
        const userRole = await this.userRoleRepository.findOne(id);
        if (userRole) {
          return(userRole);
        } else {
            return("Not found "+id);
         // next(new PostNotFoundException(id));
        }
    }
}

export default UserRoleService;