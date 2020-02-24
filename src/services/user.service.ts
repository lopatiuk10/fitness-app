import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';
import Role from '../models/role.entity';
import UserRole from '../models/user-role.entity';

class UserService{
    
    private userRepository;
    private roleRepository;
    private userRoleRepository;

    constructor(){
        this.userRepository = getRepository(User);
        this.roleRepository = getRepository(Role);
        this.userRoleRepository = getRepository(UserRole);
    }

    //Create user
    public create = async (body) => {
        const userData: CreateUserDto = body;
        const newUser = this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        return(newUser);
    }

    //Get all users
    public getAll = async () => {
        const users = await this.userRepository.find();
        return (users);
    }
    
    //Get all athletes
    public getAthletes = async () => {
        const role  = await this.roleRepository.findOne({id: 1});
        const users = await this.userRepository.find();
        let athlete;
        const athletes = users.map(async(item) => {
            const user: User = item;
            athlete = await this.userRoleRepository.find({user_: user, role_: role});
            if(athlete.length > 0){
               return item; 
            }
        });
        const promiseAthletes = Promise.all(athletes);
        const filteredAthletes = (await promiseAthletes).filter(item => {
            if(item !== undefined)
            return item;
        });
        return filteredAthletes;  
    }
}

export default UserService;