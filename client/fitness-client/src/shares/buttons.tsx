import React from 'react';
import '../App.css';
import { observer } from 'mobx-react';

export const Button = observer( props =>(<button onClick = {props.onClick} >{props.title}</button>));