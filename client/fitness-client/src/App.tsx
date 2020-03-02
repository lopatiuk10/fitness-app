import * as React from 'react';
import ProgramList  from './components/programs/program-list';
import  AthleteList  from './components/athletes/athlete-list';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';
import { Navigation } from './components/navigation/navigation';


class App extends React.Component {

  render() {
    return <div>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path = '/programs' component = {ProgramList}/>
          <Route exact path = '/athletes' component = {AthleteList}/>
        </Switch>
      </Router>
     {/* <ProgramList/>
     <AthleteList/> */}
     </div>
    
  }
}
export default App;
