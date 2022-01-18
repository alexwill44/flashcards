import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
    Library
} from '../pages';

function Routes(props) {
    return ( 
        <Switch>
            <Route exact path='/' component={Library} />
        </Switch>
    );
}

export default Routes;