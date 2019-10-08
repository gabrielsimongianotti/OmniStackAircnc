import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/index.js';
import Dashboard from './pages/DashBoard';
import New from './pages/New/index.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/new" exact component={New} />
            </Switch>
        </BrowserRouter>
    );
}