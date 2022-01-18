import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
    Library,
    Create,
} from '../pages';

function Routes(props) {
    return ( 
        <Switch>
            <Route exact path='/' component={Library} />
            <Route exact path='/create' component={Create} />
        </Switch>
    );
}

export default Routes;