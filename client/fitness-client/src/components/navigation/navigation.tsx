import React from 'react';
import { Link } from 'react-router-dom';
 
export class Navigation extends React.Component{
    render(){
        return <nav>
            <Link to = '/login'>Login </Link>
            <Link to = '/registration'>Registration</Link>
        </nav>;
    }
}