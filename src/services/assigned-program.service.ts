import * as express from 'express';
import { getRepository } from 'typeorm';
import AssignedPrograms from '../models/assigned_program.entity';
import CreateAssignedProgramDto from '../dto/assigned_program.dto';
import User from '../models/user.entity';

class AssignedProgramService{
    private programRepository = getRepository(AssignedPrograms);
    private athleteRepository =getRepository(User);
    
    //Назначить программу на атлета
    public createAssigned = async (body) => {
        const programData: CreateAssignedProgramDto = body;
        const newProgram = this.programRepository.create(programData);
        await this.programRepository.save(newProgram);
        return(newProgram);
      }
    
      //Получить все назначенные программы
      public getAllAssigned = async () => {
        const program = await this.programRepository.find();
        return(program);
      }
    
      //Получить все программы назначенные на атлета
      public getAssignedByAthleteId = async (params) => {
        const athleteId = params.id;
        const athlete=await this.athleteRepository.findOne({id:JSON.parse(athleteId)});
        const program = await this.programRepository.find({athlete_:athlete});
        if (program.length!==0) {
          return(program);
        } else {
            return("Not found "+athleteId);
        }
      }
    
      //Удалить назначенную программу
      public deleteAssigned = async (params) => {
        const id = params.id;
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