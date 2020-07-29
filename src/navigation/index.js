import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HOME, POST_DETAILS } from '../constants/routes';
import Header from '../components/Header';
import Home from '../views/Home';
import PostDetails from '../views/PostDetails';

const Navigation = () => (
    <Router> 
        <Header />
        <Switch>
            <Route 
                component={Home}
                exact
                path={HOME}
            />
            <Route
                exact
                path={POST_DETAILS}
                component={PostDetails}
            />
        </Switch>
    </Router>
);

export default Navigation;