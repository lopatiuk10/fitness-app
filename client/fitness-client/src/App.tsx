import * as React from 'react';
import ProgramList  from './components/programs/program-list';
import  AthleteList  from './components/athletes/athlete-list';
//import {ProgramComponent} from './components/program.component'


class App extends React.Component {

  render() {
    return <div>
     <ProgramList/>
     <AthleteList/>
     </div>
    
  }
}
export default App;
