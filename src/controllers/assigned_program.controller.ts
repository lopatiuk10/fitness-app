import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateAssignedDto from '../dto/assigned_program.dto';
import AssignedProgramService from '../services/assigned-program.service';

 
class AssignedProgramController implements Controller {
  public path = '/assigned';
  public router = express.Router();
  private service:AssignedProgramService=new AssignedProgramService();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateAssignedDto), this.service.createAssigned);
    this.router.get(this.path, this.service.getAllAssigned);
    this.router.get(`${this.path}/:id`, this.service.getAssignedById);
    this.router.delete(`${this.path}/:id`, this.service.deleteAssigned);
  }
}

export default AssignedProgramController;
