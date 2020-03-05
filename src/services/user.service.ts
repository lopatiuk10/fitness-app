import e, * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';
import Role from '../models/role.entity';
import UserRole from '../models/user-role.entity';
import passport from 'passport';

class UserService {
    
    private userRepository;
    private roleRepository;
    private userRoleRepository;


    constructor(){
        this.userRepository = getRepository(User);
        this.roleRepository = getRepository(Role);
        this.userRoleRepository = getRepository(UserRole);
    }

    // public login = async () => {
    //     passport.authenticate('local',{session: false} ),
    //     function(req, res) {
    //       res.send( req.body );
    //    }

    // }


    public registration = async (body) => {
        let result = await this.userRepository.find({email: body.email});
        if (result[0])
        return "Registrated";
        else{
            const userData: CreateUserDto = body;
            const newUser = this.userRepository.create(userData);
            await this.userRepository.save(newUser);
            return(newUser);
        }
    }
  
    //Create user
    public create = async (body) => {
        const userData: CreateUserDto = body;
        const newUser = this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        return(newUser);
    }

    public getByEmail = async (userEmail) => {
        let result = await this.userRepository.findOne({email: userEmail});
        return (result);
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