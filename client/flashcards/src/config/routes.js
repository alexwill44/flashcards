import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
    Library,
    Create,
    Show,
} from '../pages';

function Routes(props) {
    return ( 
        <Switch>
            <Route exact path='/' component={Library} />
            <Route exact path='/create' component={Create} />
            <Route path='/:id' component={Show} />
        </Switch>
    );
}

export default Routes;