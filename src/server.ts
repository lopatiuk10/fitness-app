import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import config from './ormconfig';
import UserController from './controllers/user.controller';
import ProgramController from './controllers/program.controller';
import AssignedProgramController from './controllers/assigned_program.controller';
import UserRoleController from './controllers/user_role.controller';

 
(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App([new UserController, new ProgramController, new AssignedProgramController, new UserRoleController],
    5000
  );
  app.listen();
})();