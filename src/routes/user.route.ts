import * as express from 'express';
import Route from '../interfaces/route.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from '../dto/user.dto';
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';
import passport from 'passport';
import User from 'models/user.entity';
import * as session from 'express-session';
import { currentUser } from '../app';


//import mustAuthenticatedMw from '../app';

export function mustAuthenticatedMw (req, res, next){
  req.isAuthenticated()
    ? next()
    : res.redirect('/');
};

class UserRoute implements Route {
  public path = '/users';
  public athletesPath = "/athletes";
  public router = express.Router();
  private controller: UserController = new UserController();
  private service: UserService = new UserService();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {

    // this.router.get(`/account`, function (req, res, next) {
    //   if(req.isAuthenticated()){
    //   return req.body;
    //   }
    //   else{
    //   return new Error("Error");
    //   }
    // }
    // );
    this.router.get('/logout', function(req, res){
      req.logout();
      res.send('Logged out');
      });

    this.router.get('/login', function ( req, res ) {
     if(req.isAuthenticated())
     res.send(req.user);
     else
     res.send(false);
    }
    );

    this.router.post('/login',
      passport.authenticate( 'local'),
       function( req, res ) {
        res.send(req.body);
      }
    );


    
    this.router.post('/registration', validationMiddleware(CreateUserDto), this.controller.registration);
    this.router.get(this.path, this.controller.getAll);
    this.router.post('/email', this.controller.getByEmail);
    this.router.get(this.athletesPath, this.controller.getAthletes);
  }
}

export default UserRoute;