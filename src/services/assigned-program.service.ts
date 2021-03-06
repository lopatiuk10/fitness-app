import * as express from 'express';
import { getRepository } from 'typeorm';
import AssignedPrograms from '../models/assigned-program.entity';
import CreateAssignedProgramDto from '../dto/assigned-program.dto';
import User from '../models/user.entity';

class AssignedProgramService{
  
  private programRepository;
  private athleteRepository;

  constructor(){
    this.programRepository = getRepository(AssignedPrograms);
    this.athleteRepository = getRepository(User);
  }
  
  //Assign program to athlete
  public create = async (body) => {
      const programData: CreateAssignedProgramDto = body;
      const newProgram = this.programRepository.create(programData);
      await this.programRepository.save(newProgram);
      return(newProgram);
  }
  
    //Get all assigned programs
  public getAll = async () => {
    const program = await this.programRepository.find();
    return(program);
  }

  //Get all assigned on athlete programs
  public getByAthleteId = async (athleteId) => {
    const athlete = await this.athleteRepository.findOne({id: JSON.parse(athleteId)});
    const program = await this.programRepository.find({athlete_: athlete});
    if (program.length !== 0) {
      return(program);
    } else {
        return("Not found " + athleteId);
    }
  }

  //Delete assigned program
  public delete = async (id) => {
    const deleteResponse = await this.programRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return("Program " + id + " deleted succesfully");
    } else {
        return("Not Found " + id);
    }
  }
}

export default AssignedProgramService;