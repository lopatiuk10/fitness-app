import React from 'react';
import  AssignedProgramList from './assigned-programs-list';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { user } from '../../stores/user.store';
import { LogoutButton } from '../../shares/buttons';
import './athlete.css';


export class Athlete2 extends React.Component{
    render(){
        {if(!user.isAuthorized)
            return <Redirect to = '/error'/>

            if(user.role === 2)
            return <h2>You logged in like <Link to = '/coach'>coach</Link></h2>
        }
        return <div>
            <LogoutButton title = 'Logout' onClick = {e => user.logout(e)}/>
            <AssignedProgramList/>
        </div>
    }
}