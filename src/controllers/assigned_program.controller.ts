import * as express from 'express';
import AssignedProgramService from '../services/assigned-program.service';

 
class AssignedProgramController {

  private service:AssignedProgramService=new AssignedProgramService();

  public callCreateAssigned = async (request: express.Request, response: express.Response) => {
    const newProgram =await this.service.createAssigned(request);
    response.send(newProgram);
  }

  public callGetAllAssigned = async (request: express.Request, response: express.Response) => {
    const program = await this.service.getAllAssigned(request);
    response.send(program);
  }

  public callGetAssignedById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const program = await this.service.getAssignedById(request,next);
    response.send(program);
  }

  public callDeleteAssigned = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const deleteResponse = await this.service.deleteAssigned(request,next);
    response.send(deleteResponse);
  }
}

export default AssignedProgramController;
