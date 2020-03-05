import { observer, PropTypes } from "mobx-react";
import React from 'react';
import { Button} from '../../shares/buttons';
import { Redirect } from 'react-router-dom';
import { CoachInfo } from "./coach";
import { model, user } from "../../stores/user.store";
import { Unauthorized } from '../unauthorized';
import  ProgramList  from "../programs/program-list";
import { Link } from 'react-router-dom';

export class CoachWindow extends React.Component {
    componentDidMount(){
        user.isAuthenticate(user.email);
    }
    render(){
        { if ( !user.isAuthorized ){
                debugger;    
            return <Redirect to = '/error'/>
        }    
        }
        return <div>
            <Link to = '/athlete'>Athlete</Link>
            <CoachInfo user = {user}/>
            <ProgramList/>
        </div>
    }
}

