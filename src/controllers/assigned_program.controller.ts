import * as express from 'express';
import AssignedProgramService from '../services/assigned-program.service';

 
class AssignedProgramController {

  private service:AssignedProgramService=new AssignedProgramService();

  public callCreateAssigned = async (request: express.Request, response: express.Response) => {
    const newProgram =await this.service.createAssigned(request.body);
    response.send(newProgram);
  }

  public callGetAllAssigned = async (request: express.Request, response: express.Response) => {
    const program = await this.service.getAllAssigned();
    response.send(program);
  }

  public callGetAssignedByAthleteId = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const program = await this.service.getAssignedByAthleteId(request.params);
    response.send(program);
  }

  public callDeleteAssigned = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const deleteResponse = await this.service.deleteAssigned(request.params);
    response.send(deleteResponse);
  }
}

export default AssignedProgramController;
