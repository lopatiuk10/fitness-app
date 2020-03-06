import { observer, PropTypes } from "mobx-react";
import React from 'react';
import { LogoutButton, Button} from '../../shares/buttons';
import { Redirect, Router, Switch, Route } from 'react-router-dom';
import { Info } from "./coach";
import { model, user } from "../../stores/user.store";
import { Unauthorized } from '../unauthorized';
import  ProgramList  from "../programs/program-list";
import { NavLink, Link } from 'react-router-dom';
import { AthleteList } from "../../stores/athlete.store";

export class CoachWindow extends React.Component {
    // componentDidMount(){
    //     user.isAuthenticate();
    // }
    render(){
         { if(user.role === 1)
            return <h2>You logged in like <NavLink to = '/athlete'>athlete</NavLink></h2> ;
            if ( !user.isAuthorized ){
                debugger;    
            return <Redirect to = '/error'/>
        }    
        else{
        return <div>
            <LogoutButton title = 'Logout' onClick = {e => user.logout(e)}/>
                <Link to = '/athletes' className = 'link'>Athletes</Link>
                <Link to = '/programs' className = 'link'>Programs</Link>  
                <Info/> 
        </div>
        }
       
    }
}
    
}

