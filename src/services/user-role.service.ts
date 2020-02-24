import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserRoleDto from '../dto/user-role.dto';
import UserRole from '../models/user-role.entity';

class UserRoleService{

    private userRoleRepository;
    
    constructor(){
        this.userRoleRepository = getRepository(UserRole);
    }
    

    //Создать роль для пользователя
    public create = async (body) => {
        const userRoleData: CreateUserRoleDto = body;
        const newUserRole = this.userRoleRepository.create(userRoleData);
        await this.userRoleRepository.save(newUserRole);
        return (newUserRole);
    }

    //Получить всех пользователей с ролями
    public getAll = async () => {
        const userRole = await this.userRoleRepository.find();
        return(userRole);
    }

    //Получить пользователя с ролью по ID
    public getById = async (id) => {
        const userRole = await this.userRoleRepository.findOne(id);
        if (userRole) {
          return(userRole);
        } else {
            return("Not found " + id);
        }
    }
}

export default UserRoleService;