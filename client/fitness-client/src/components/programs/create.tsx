import { observer, PropTypes } from "mobx-react";
import React from 'react';
import '../../App.css';
import { Button} from '../../shares/buttons';
import { list } from '../../stores/program.store';

export const CreateForm = observer( props =>(
    <div className = 'create-form' id = 'create-form'>
         <form name = 'edit-program'>
         <input type = 'text' value = {props.model.name} placeholder = 'Name' onChange = { e => props.model.setName( e.target.value )}/>
         <input type = 'number' placeholder = 'Duration' onChange = { e => props.model.setDuration( e.target.value )} />
         <Button title = "Create" onClick = { e => { props.list.createProgram(e, props.model.name, props.model.duration )}}/>
         <Button title = "Cancel" onClick = { e => { props.list.hideCreateForm(e)}}/>
     </form>
   </div>
) )