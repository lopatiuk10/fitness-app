import { observer, PropTypes } from "mobx-react";
import { values } from "mobx";
import React from 'react';
import '../../App.css';
import { list, model } from '../../stores/program.store';
import { Button } from '../../shares/buttons';
import { Athlete } from './athlete-item';
import { athleteStore } from "../../stores/athlete.store";

export const AppView = observer(props => (
    <div>
      {/* <Button title = "Athletes" onClick = {e => athleteStore.getAthletes(e) }/> */}
      <table>
        <thead>
          <tr>
            <td>ID</td><td>Name</td><td>LastName</td><td>Email</td>
          </tr>
        </thead>
        <tbody>
           {props.athleteStore.athletes.map( athlete => (
             <Athlete athletes = { athlete } />
      ))}
      </tbody>
      </table>
    </div>
  ));

  class AthleteList extends React.Component{
    componentDidMount(){
      athleteStore.getAthletes();
    }
    
    render(){
      return (
        <AppView athleteStore = { athleteStore } />
      )
    }
}

export default AthleteList;