import React, { useEffect } from 'react';
import { Redirect, Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { RouteGuard, history } from './routes';
import { Dashboard } from './pages';

import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './App.css';
import { DashboardActions } from './stores/actions';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(DashboardActions.getInventory(1));
    });

    return (
        <div className='app overflow-x-hidden'>
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route exact path='/' render={ () => <Redirect to='/dashboard' />} />
                    </Switch>
                </Router>
            </div>
            <NotificationContainer />
        </div>
    );
}

export default App;
