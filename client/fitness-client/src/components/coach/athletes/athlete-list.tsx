import { observer, PropTypes } from "mobx-react";
import { values } from "mobx";
import React from 'react';
import { list, model } from '../../../stores/program.store';
import { Button } from '../../../shares/buttons';
import { Athlete } from './athlete-item';
import { athleteStore } from "../../../stores/athlete.store";
import { user } from "../../../stores/user.store";
import { Link } from 'react-router-dom';

export const AppView = observer(props => (
    <div>
      {/* <Button title = "Athletes" onClick = {e => athleteStore.getAthletes(e) }/> */}
      <Button title = 'Logout' onClick = {e => props.user.logout(e)}/>

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
      debugger;
    }
    
    render(){
      return <div>
        <Link to = '/programs' className = 'link'>Programs</Link>
        <AppView athleteStore = { athleteStore } user = {user} />
        </div>
      
    }
}

export default AthleteList;