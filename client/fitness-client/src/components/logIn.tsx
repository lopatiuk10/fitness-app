import { observer, PropTypes } from "mobx-react";
import React from 'react';
import '../App.css';
import { Button} from '../shares/buttons';



export const Login = observer( props =>(
    <div className = 'login-form' id = 'login-form'>
         <form name = 'login'>
         <input type = 'text' value = {props.model.email} placeholder = 'Email' onChange = { e => props.model.setEmail( e.target.value )}/>
         <input type = 'password' value = {props.model.password}  placeholder = 'password' onChange = { e => props.model.setPassword( e.target.value )} />
         <Button title = "Login" onClick = { e => { props.user.sendUser(e, props.model.email, props.model.password )}}/>
     </form>
   </div>
))

