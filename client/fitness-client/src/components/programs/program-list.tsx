import { observer, PropTypes } from "mobx-react";
import { values } from "mobx";
import React from 'react';
import '../../App.css';
import { Program} from './program-item';
import { list, model } from '../../stores/program.store';
import { ApiServices } from "../../services/api-services";
import { EditForm } from './edit-form';
import { Button } from '../../shares/buttons';

export const AppView = observer( props => (
    <div>
       {props.list.isVisible ? <EditForm list = {list} model = {model}/> : null}
      <table>
        <thead>
          <tr>
            <td>ID</td><td>Name</td><td>Duration</td>
          </tr>
        </thead>
        <tbody>
           { props.list.programs.map( program => (
            <Program list = { props.list}  programs = { program } />
          ))}
      </tbody>
      </table>
    </div>
  ));

class ProgramList extends React.Component{
  componentDidMount(){
    list.getPrograms();
  }
  
    render(){
      return (
        <AppView list = { list } model = { model } />
      )
    }
}

export default ProgramList;