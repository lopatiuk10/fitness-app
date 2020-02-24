import * as express from 'express';
import { getRepository } from 'typeorm';
import Route from '../interfaces/route.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateAssignedDto from '../dto/assigned-program.dto';
import AssignedProgramController from '../controllers/assigned-program.controller';

 
class AssignedProgramRoute implements Route {
  public path = '/assigned';
  public router = express.Router();
  private controller:AssignedProgramController = new AssignedProgramController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateAssignedDto), this.controller.create);
    this.router.get(this.path, this.controller.getAll);
    this.router.get(`${this.path}/:id`, this.controller.getByAthleteId);
    this.router.delete(`${this.path}/:id`, this.controller.delete);
  }
}

export default AssignedProgramRoute;
