import React from 'react';
import { Link } from 'react-router-dom';


export class Unauthorized extends React.Component {
    
    render(){
        return<div>
             <h2>Unauthorized</h2>
             <Link to = '/login'>Login</Link>
        </div>
    }
}
