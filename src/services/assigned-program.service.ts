import * as express from 'express';
import { getRepository } from 'typeorm';
import AssignedPrograms from '../models/assigned_program.entity';
import CreateAssignedProgramDto from '../dto/assigned_program.dto';

class AssignedProgramService{
    private programRepository = getRepository(AssignedPrograms);
    
    public createAssigned = async (request: express.Request, response: express.Response) => {
        const programData: CreateAssignedProgramDto = request.body;
        const newProgram = this.programRepository.create(programData);
        await this.programRepository.save(newProgram);
        response.send(newProgram);
      }
    
      public getAllAssigned = async (request: express.Request, response: express.Response) => {
        const program = await this.programRepository.find();
        response.send(program);
      }
    
      public getAssignedById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const id = request.params.id;
        const program = await this.programRepository.findOne(id);
        if (program) {
          response.send(program);
        } else {
            response.send("Not found "+id);
         // next(new PostNotFoundException(id));
        }
      }
    
     
      public deleteAssigned = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
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

export default AssignedProgramService;