import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';

export default function router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Login} />
                <Route path='/signup'  component={Signup} />
            </Switch>
        </BrowserRouter>

    )
}

