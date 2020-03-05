import { observer, PropTypes } from "mobx-react";
import React from 'react';
//import '../../App.css';



export const AssignedProgram = observer( props => (
    <tr>
       <td>{props.programs.id}</td> 
    </tr>
));

