import * as React from 'react';
import ProgramList  from './components/programs/program-list';
import  AthleteList  from './components/coach/athletes/athlete-list';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router';
import { Navigation } from './components/navigation/navigation';
import { Login } from './components/logIn';
import { LoginComponent } from './components/login-component';
import { user } from './stores/user.store';
import { CoachWindow } from './components/coach/coachWindow';
import  { Wrapper } from './components/wrapper';
import { Unauthorized } from './components/unauthorized';
import { RegistrationComponent } from './components/authorization/registration.component';
import { history } from 'react-router-history'
import { Exception } from './components/authorization/exception';
import { Athlete2 } from './components/athlete/athlete';
import './App.css';
import { Coach } from './components/redirect';
//import { Coach } from './components/coach';


class App extends React.Component {

  render() {
    return <div>
      <Router history = {history}>
          <Switch>
              <Route exact path = '/login'  component = {LoginComponent}/>
              <Route exact path = '/' component = {Wrapper}/>
              <Route exact path = '/coach' component = {CoachWindow}/>
              <Route exact path = '/error' component = {Unauthorized}/>
              <Route exact path = '/registration' component = {RegistrationComponent}/>
              <Route exact path = '/registrated' component = {Exception}/>
              <Route exact path = '/athlete' component = {Athlete2}/>
              <Route exact path = '/redirect' component = {Coach}/>
              <Route exact path = '/athletes' component = {AthleteList}/>
              <Route exact path = '/programs' component = {ProgramList}/>

          </Switch>
      </Router>

     </div>
    
  }
}
export default App;
