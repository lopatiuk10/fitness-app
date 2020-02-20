import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';

class UserService{

    private userRepository = getRepository(User);

    public createUser = async (request:express.Request) => {
        const userData: CreateUserDto = request.body;
        const newUser = this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        return(newUser);
    }
    
    public getAllUsers = async (request: express.Request) => {
        const users = await this.userRepository.find();
        return (users);
    }
}

export default UserService;