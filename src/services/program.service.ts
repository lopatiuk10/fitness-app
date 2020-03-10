import * as express from 'express';
import { getRepository } from 'typeorm';
import Program from '../models/program.entity';
import User from '../models/user.entity';
import CreateProgramDto from 'dto/program.dto';

class ProgramService{

  private programRepository;
  private coachRepository;
  
  constructor(){
    this.programRepository = getRepository(Program);
    this.coachRepository = getRepository(User);
  }

  
  //Create programm
  public create = async (body) => {
    const programData: CreateProgramDto = body;
    const newProgram = this.programRepository.create(programData);
    await this.programRepository.save(newProgram);
    return(newProgram);
  }
  
  //Get all programs
  public getAll = async () => {
    const program = await this.programRepository.find();
    return(program);
  }
  
  //Get all programs created by coach
  public getByCoachId = async (id) => {
    const coachId = id;
    const coach = await this.coachRepository.findOne(coachId);
    const program = await this.programRepository.find({coach_:coach});
    if (program.length !== 0) {
      return(program);
    } else {
        return("Not found " + coachId);
    }
  }

  //Edit program
  public edit = async (id, body) => {
    const programData: Program = body;
    await this.programRepository.update(id, programData);
    const updatedProgram = await this.programRepository.findOne(id);
    if (updatedProgram) {
      return(await this.programRepository.find());
    } else {
        return("Not Found " + id);
      //next(new PostNotFoundException(id));
    }
  }

  //Delete program
  public delete = async (id) => {
    const deleteResponse = await this.programRepository.delete(id);
    if (deleteResponse.affected !== 0) {
      return ("Ok");
    } else {
      return( "Not Found " + id );
    }
  }

}

export default ProgramService;