import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';

const activeRole = 'doctor';

function App() {
    return (
        <Switch>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path={`/${activeRole}`}>
                <Home/>
            </Route>
        </Switch>
    );
}

export default App;
