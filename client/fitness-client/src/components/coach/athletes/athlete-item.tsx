import { observer, PropTypes } from "mobx-react";
import React from 'react';
//import '../../App.css';
import { Button } from '../../../shares/buttons';
import { AthleteList, athleteStore } from '../../../stores/athlete.store';
import { list} from '../../../stores/program.store'



export const Athlete = observer( props => (
    <tr>
       <td>{props.athletes.id}</td> <td>{props.athletes.name}</td> <td>{props.athletes.lastname}</td><td>{props.athletes.email}</td>
       <td><Button title = "Assign program" /></td>
    </tr>
));
