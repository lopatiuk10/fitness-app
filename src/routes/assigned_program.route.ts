import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateAssignedDto from '../dto/assigned_program.dto';
import AssignedProgramController from '../controllers/assigned_program.controller';

 
class AssignedProgramRoute implements Controller {
  public path = '/assigned';
  public router = express.Router();
  private controller:AssignedProgramController=new AssignedProgramController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateAssignedDto), this.controller.callCreateAssigned);
    this.router.get(this.path, this.controller.callGetAllAssigned);
    this.router.get(`${this.path}/:id`, this.controller.callGetAssignedByAthleteId);
    this.router.delete(`${this.path}/:id`, this.controller.callDeleteAssigned);
  }
}

export default AssignedProgramRoute;
