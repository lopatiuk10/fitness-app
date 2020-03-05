import { Login } from './logIn';
import React from 'react';
import { user, model } from '../stores/user.store';
import { Redirect, Link, Route } from 'react-router-dom';
import { CoachWindow } from './coach/coachWindow';



export class LoginComponent extends React.Component{
    render(){
        return <div>
            <Link to = '/registration'>Registration </Link>
            <Link to = '/coach'>Coach </Link>
            <Link to = '/athlete'>Athlete</Link>
            <Login user = {user} model = {model}/>
        </div>
    }
}