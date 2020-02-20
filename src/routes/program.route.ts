import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateProgramDto from '../dto/program.dto';
import ProgramController from '../controllers/program.controller';
 
class ProgramRoute implements Controller {
  public path = '/programs';
  public router = express.Router();
  private controller:ProgramController=new ProgramController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, this.controller.callCreateProgram);
    this.router.get(this.path, this.controller.callGetAllPrograms);
    this.router.get(`${this.path}/:id`, this.controller.callGetProgramById);
    this.router.patch(`${this.path}/:id`, validationMiddleware(CreateProgramDto), this.controller.callEditProgram);//true вторым параметром в validationMiddleware
    this.router.delete(`${this.path}/:id`, this.controller.callDeleteProgram);
  }
}

export default ProgramRoute;
