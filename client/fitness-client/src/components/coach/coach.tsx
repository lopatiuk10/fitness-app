import { observer, PropTypes } from "mobx-react";
import React from 'react';
import { Button} from '../../shares/buttons';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AthleteList } from "../../stores/athlete.store";
import { ProgramList } from "../../stores/program.store";

export class Info extends React.Component {
  render(){
    return <div> 
      <Switch>
      <Route path = '/athletes' component = {AthleteList}/>
      <Route path = '/programs' component = {ProgramList}/>
      </Switch>
    </div>
  }
}