import { observer, PropTypes } from "mobx-react";
import { values } from "mobx";
import React from 'react';
import '../../App.css';
import { AssignedProgram} from './assigned-program-item';
import { assignedProgramStore } from '../../stores/assigned-program.store';
import { ApiServices } from "../../services/api-services";

export const AppView = observer( props => (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td><td>Name</td><td>Duration</td>
          </tr>
        </thead>
        <tbody>
           { props.store.assignedPrograms.map( program => (
            <AssignedProgram  programs = { program } />
          ))}
      </tbody>
      </table>
    </div>
  ));

 class AssignedProgramList extends React.Component{
  componentDidMount(){
    assignedProgramStore.getMyPrograms();
  }
    render(){
      return (
        <AppView store = {assignedProgramStore} />
      )
    }
}

export default AssignedProgramList;