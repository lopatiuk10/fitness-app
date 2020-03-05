import { observer, PropTypes } from "mobx-react";
import React from 'react';
import { Button} from '../../shares/buttons';
import { Redirect } from 'react-router-dom';

export const CoachInfo = observer( props => (
    <div>
      <h2>{ props.user.id }</h2>
      <h2>{ props.user.email }</h2>
</div>
));