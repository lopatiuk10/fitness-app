import React from 'react';
import { user, model } from '../../stores/user.store';
import { Redirect, Link, Route } from 'react-router-dom';
import { CoachWindow } from '../coach/coachWindow';
import { Registration } from './registration';



export class RegistrationComponent  extends React.Component{
    // private result;
    // shouldComponentUpdate(){
    //     return true;
    // }
    // componentDidUpdate(){
    //     this.result = user.isRegistrated;
    //     debugger;
    // }
    render(){
        if(user.isRegistrated)
        return <Redirect to = '/registrated'/>
        return <div>
            <Link to = '/login'>Login </Link>
            <Link to = '/coach'>Coach</Link>
            <Registration user = {user} model = {model}/>
        </div>
    }
}