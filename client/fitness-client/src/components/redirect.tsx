import * as React from 'react';
import ProgramList  from '../components/programs/program-list';
import  AthleteList  from './coach/athletes/athlete-list';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router';
import { Navigation } from '../components/navigation/navigation';
import { Login } from '../components/logIn';
import { LoginComponent } from '../components/login-component';
import { user } from '../stores/user.store';
import {Link} from 'react-router-dom';


//import { Coach } from './components/coach';


export class Coach extends React.Component {
  componentDidMount(){
    user.isAuthenticate();
  }
  render() {
    return  <div>
        <Link to = '/coach' className = 'link'>Coach</Link>
        <Link to ='/athlete' className = 'link'>Athlete</Link>
    </div>
  }
}