import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateProgramDto from '../dto/program.dto';
import Program from '../models/program.entity';
import ProgramService from '../services/program.service';
 
class ProgramController implements Controller {
  public path = '/programs';
  public router = express.Router();
  private service:ProgramService=new ProgramService();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateProgramDto), this.service.createProgram);
    this.router.get(this.path, this.service.getAllPrograms);
    this.router.get(`${this.path}/:id`, this.service.getProgramById);
    this.router.patch(`${this.path}/:id`, validationMiddleware(CreateProgramDto), this.service.editProgram);//true вторым параметром в validationMiddleware
    this.router.delete(`${this.path}/:id`, this.service.deleteProgram);
  }
}

export default ProgramController;
