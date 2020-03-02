import React from 'react';
import { Link } from 'react-router-dom';
 
export class Navigation extends React.Component{
    render(){
        return <nav>
            <Link to="/programs">Programs </Link>  
            <Link to="/athletes">Athletes</Link>  
        </nav>;
    }
}