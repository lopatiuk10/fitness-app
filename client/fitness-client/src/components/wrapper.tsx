import * as React from 'react';
import ProgramList  from '../components/programs/program-list';
import  AthleteList  from './coach/athletes/athlete-list';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router';
import { Navigation } from '../components/navigation/navigation';
import { Login } from '../components/logIn';
import { LoginComponent } from '../components/login-component';
import { user } from '../stores/user.store';
import { CoachWindow } from '../components/coach/coachWindow';
import { Unauthorized } from './unauthorized';
import { Athlete2 } from './athlete/athlete';

//import { Coach } from './components/coach';


export class Wrapper extends React.Component {
  componentDidMount(){
    user.isAuthenticate();
  }
  render() {
  
    return <div>
          <Navigation/>
          <Route exact path = '/programs' component = {ProgramList}/>
          {/* <Route exact path = '/athletes' component = {AthleteList}/> */}
     </div>
    
  }
}
