import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateProgramDto from '../dto/program.dto';
import Program from '../models/program.entity';
import User from '../models/user.entity';

class ProgramService{

    private programRepository = getRepository(Program);
    private coachRepository =getRepository(User);
    
    //Создать программму
    public createProgram = async (body) => {
      const programData = body;
      const newProgram = this.programRepository.create(programData);
      await this.programRepository.save(newProgram);
      return(newProgram);
    }
    
    //Получить все программы
    public getAllPrograms = async () => {
      const program = await this.programRepository.find();
      return(program);
    }

    //Получить все программы по ID тренера
    public getProgramByCoachId = async (request: express.Request, next: express.NextFunction) => {
      const coachId = request.params.id;
      const coach=await this.coachRepository.findOne(coachId);
      const program = await this.programRepository.find({coach_:coach});
      if (program.length!==0) {
        return(program);
      } else {
          return("Not found "+coachId);
       // next(new PostNotFoundException(id));
      }
    }

    //Изменить программу
    public editProgram = async (request: express.Request) => {
      const id = request.params.id;
      const programData: Program = request.body;
      await this.programRepository.update(id, programData);
      const updatedProgram = await this.programRepository.findOne(id);
      if (updatedProgram) {
        return(updatedProgram);
      } else {
          return("Not Found "+id);
        //next(new PostNotFoundException(id));
      }
    }

    //Удалить программу 
    public deleteProgram = async (request: express.Request) => {
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

export default ProgramService;