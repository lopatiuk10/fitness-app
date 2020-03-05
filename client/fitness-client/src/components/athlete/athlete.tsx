import React from 'react';
import  AssignedProgramList from './assigned-programs-list';
import { Link, Redirect } from 'react-router-dom';
import { user } from '../../stores/user.store';


export class Athlete2 extends React.Component{
    componentDidMount(){
        user.isAuthenticate(user.email);
    }
    render(){
        {if(!user.isAuthorized)
            return <Redirect to = '/error'/>
        }
        return <div>
            
            <Link to = '/login'>Back</Link>
            <AssignedProgramList/>
        </div>
    }
}