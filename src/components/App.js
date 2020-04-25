import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route path="">
                <Home/>
            </Route>
        </Switch>
    );
}

export default App;
