import { observer, PropTypes } from "mobx-react";
import React from 'react';
import '../../App.css';
import { Button} from '../../shares/buttons';
import { list } from '../../stores/program.store';



export const EditForm = observer( props =>(
    <div className = 'edit-form' id = 'edit-form'>
         <form name = 'edit-program'>
         <input type = 'text' value = {props.model.name} placeholder = 'Name' onChange = { e => props.model.setName( e.target.value )}/>
         <input type = 'number' placeholder = 'Duration' onChange = { e => props.model.setDuration( e.target.value )} />
         <Button title = "Send" onClick = { e => { props.list.editProgram(e, props.model.name, props.model.duration )}}/>
     </form>
   </div>
) )
