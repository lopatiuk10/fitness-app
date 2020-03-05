import { observer, PropTypes } from "mobx-react";
import React from 'react';
import '../../App.css';
import { Button } from '../../shares/buttons';



export const Registration = observer( props => (
    <div className = 'login-form' id = 'login-form'>
         <form name = 'login'>
         <input type = 'text' value = {props.model.name} placeholder = 'Name' onChange = { e => props.model.setName( e.target.value ) }/>
         <input type = 'text' value = {props.model.lastname}  placeholder = 'Lastname' onChange = { e => props.model.setLastname( e.target.value ) } />
         <input type = 'text' value = {props.model.email} placeholder = 'Email' onChange = { e => props.model.setEmail( e.target.value ) }/>
         <input type = 'password' value = {props.model.password}  placeholder = 'password' onChange = { e => props.model.setPassword( e.target.value )  } />
         <select onChange = {e => props.model.setRole( e.target.value ) }>
           <option >Coach</option>
           <option>Athlete</option>
         </select>
         <Button title = "Registration" onClick = { e => { props.user.registration( e, props.model.name, props.model.lastname, props.model.email, props.model.role, props.model.password ) } }/>
     </form>
   </div>
))