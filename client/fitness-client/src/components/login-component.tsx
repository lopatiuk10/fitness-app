import { Login } from './logIn';
import React from 'react';
import { user, model } from '../stores/user.store';
import { Redirect, NavLink, Route } from 'react-router-dom';
import { CoachWindow } from './coach/coachWindow';



export class LoginComponent extends React.Component{
    render(){
        return <div>
            <NavLink to = '/registration' className = 'link'>Registration </NavLink>
            <Login user = {user} model = {model}/>
        </div>
    }
}