import * as express from 'express';
import { getRepository } from 'typeorm';
import AssignedPrograms from '../models/assigned_program.entity';
import CreateAssignedProgramDto from '../dto/assigned_program.dto';
import User from '../models/user.entity';

class AssignedProgramService{
    private programRepository = getRepository(AssignedPrograms);
    private athleteRepository =getRepository(User);
    
    public createAssigned = async (request: express.Request) => {
        const programData: CreateAssignedProgramDto = request.body;
        const newProgram = this.programRepository.create(programData);
        await this.programRepository.save(newProgram);
        return(newProgram);
      }
    
      public getAllAssigned = async (request: express.Request) => {
        const program = await this.programRepository.find();
        return(program);
      }
    
      public getAssignedById = async (request: express.Request, next: express.NextFunction) => {
        const athleteId = request.params.id;
        const athlete=await this.athleteRepository.findOne({id:JSON.parse(athleteId)});
        const program = await this.programRepository.find({athlete_:athlete});
        if (program.length!==0) {
          return(program);
        } else {
            return("Not found "+athleteId);
         // next(new PostNotFoundException(id));
        }
      }
    
      public deleteAssigned = async (request: express.Request, next: express.NextFunction) => {
        const id = request.params.id;
        const deleteResponse = await this.programRepository.delete(id);
        if (deleteResponse.affected!==0) {
          return("Program "+id+" deleted succesfully");
        } else {
            return("Not Found "+id);
          //next(new PostNotFoundException(id));
        }
    }
}

export default AssignedProgramService;