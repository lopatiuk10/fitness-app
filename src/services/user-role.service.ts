import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserRoleDto from '../dto/user-role.dto';
import UserRole from '../models/user-role.entity';

class UserRoleService{

    private userRoleRepository;
    
    constructor(){
        this.userRoleRepository = getRepository(UserRole);
    }
    

    //Create role for user
    public create = async (body) => {
        const userRoleData: CreateUserRoleDto = body;
        const newUserRole = this.userRoleRepository.create(userRoleData);
        await this.userRoleRepository.save(newUserRole);
        return (newUserRole);
    }

    //Get all user roles
    public getAll = async () => {
        const userRole = await this.userRoleRepository.find();
        return(userRole);
    }

    //Get user roles by id
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