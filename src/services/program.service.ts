import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateProgramDto from '../dto/program.dto';
import Program from '../models/program.entity';

class ProgramService{

    private programRepository = getRepository(Program);

    public createProgram = async (request: express.Request, response: express.Response) => {
        const programData: CreateProgramDto = request.body;
        const newProgram = this.programRepository.create(programData);
        await this.programRepository.save(newProgram);
        response.send(newProgram);
    }
    
    public getAllPrograms = async (request: express.Request, response: express.Response) => {
        const program = await this.programRepository.find();
        response.send(program);
    }
    
    public getProgramById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id = request.params.id;
        const program = await this.programRepository.findOne(id);
        if (program) {
          response.send(program);
        } else {
            response.send("Not found "+id);
         // next(new PostNotFoundException(id));
        }
    }
    
    public editProgram = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id = request.params.id;
        const programData: Program = request.body;
        await this.programRepository.update(id, programData);
        const updatedProgram = await this.programRepository.findOne(id);
        if (updatedProgram) {
          response.send(updatedProgram);
        } else {
            response.send("Not Found "+id);
          //next(new PostNotFoundException(id));
        }
    }
     
    public deleteProgram = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id = request.params.id;
        const deleteResponse = await this.programRepository.delete(id);
        if (deleteResponse.raw[1]) {
          response.sendStatus(200);
        } else {
            response.send("Not Found "+id);
          //next(new PostNotFoundException(id));
        }
    }

}

export default ProgramService;