import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';

class UserService{

    private userRepository = getRepository(User);

    public createUser = async (request: express.Request, response: express.Response) => {
        const userData: CreateUserDto = request.body;
        const newUser = this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        response.send(newUser);
    }
    
    public getAllUsers = async (request: express.Request, response: express.Response) => {
        const users = await this.userRepository.find();
        response.send(users);
    }
}

export default UserService;