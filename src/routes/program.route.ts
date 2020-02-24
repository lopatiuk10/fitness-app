import * as express from 'express';
import { getRepository } from 'typeorm';
import Route from '../interfaces/route.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateProgramDto from '../dto/program.dto';
import ProgramController from '../controllers/program.controller';
 
class ProgramRoute implements Route {
  public path = '/programs';
  public router = express.Router();
  private controller:ProgramController = new ProgramController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path,validationMiddleware(CreateProgramDto), this.controller.create);
    this.router.get(this.path, this.controller.getAll);
    this.router.get(`${this.path}/:id`, this.controller.getByCoachId);
    this.router.patch(`${this.path}/:id`, validationMiddleware(CreateProgramDto), this.controller.edit);
    this.router.delete(`${this.path}/:id`, this.controller.delete);
  }
}

export default ProgramRoute;
