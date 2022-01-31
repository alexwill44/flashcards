import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
    Library,
    Create,
    Delete,
    Update,
} from '../pages';

function Routes(props) {
    return ( 
        <Switch>
            <Route exact path='/' component={Library} />
            <Route exact path='/create' component={Create} />
            <Route path='/:id/update' component={Update} />
            <Route path='/:id' component={Delete} />
        </Switch>
    );
}

export default Routes;