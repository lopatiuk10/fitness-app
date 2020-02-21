import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserRoleDto from '../dto/user_role.dto';
import UserRole from '../models/user_role.entity';
import Role from '../models/role.entity';

class UserRoleService{

    private userRoleRepository = getRepository(UserRole);
    private roleRepository=getRepository(Role);

    //Создать роль для пользователя
    public createUserRole = async (body) => {
        const userRoleData: CreateUserRoleDto = body;
        const newUserRole = this.userRoleRepository.create(userRoleData);
        await this.userRoleRepository.save(newUserRole);
        return (newUserRole);
    }

    //Получить всех пользователей с ролями
    public getAllUserRoles = async () => {
        const userRole = await this.userRoleRepository.find();
        return(userRole);
    }

    //Получить пользователя с ролью по ID
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