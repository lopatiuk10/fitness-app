import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateProgramDto from '../dto/program.dto';
import Program from '../models/program.entity';
import ProgramService from '../services/program.service';
 
class ProgramController{
  private service: ProgramService =new ProgramService();
  public callCreateProgram = async (request: express.Request, response: express.Response) => {
    const newProgram = await this.service.createProgram(request.body)
    response.send(newProgram);
  }

  public callGetAllPrograms = async (request: express.Request, response: express.Response) => {
    const program = await this.service.getAllPrograms();
    response.send(program);
  }

  public callGetProgramByCoachId = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const program = await this.service.getProgramByCoachId(request,next);
    response.send(program);
  }

  public callEditProgram = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const updatedProgram = await this.service.editProgram(request);
    response.send(updatedProgram);
    
  }
 
  public callDeleteProgram = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const deleteResponse = await this.service.deleteProgram(request);
    response.send(deleteResponse);
  }
}

export default ProgramController;
