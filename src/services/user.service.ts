import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';
import Role from '../models/role.entity';
import UserRole from '../models/user_role.entity';

class UserService{

    private userRepository = getRepository(User);
    private roleRepository=getRepository(Role)
    private userRoleRepository=getRepository(UserRole)

    public createUser = async (body) => {
        const userData: CreateUserDto =body;
        const newUser = this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        return(newUser);
    }
    
    public getAllUsers = async () => {
        const users = await this.userRepository.find();
        return (users);
    }

    public getAthletes = async () => {
        const role  = await this.roleRepository.findOne({id:1});
        const users=await this.userRepository.find();
        let athlete;
        let athletes=[];
            for(let i=0;i<users.length;i++){
               const user:User=users[i];
               athlete=await this.userRoleRepository.find({user_:user,role_:role});
               if(athlete.length!==0)
               athletes.push(user);
               else
               continue;
            }
        return(athletes);
    }
}

export default UserService;