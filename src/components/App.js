import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PatientsList from './patientsList/PatientsList';
import Overview from './overview/Overview';
import Login from './login/Login';

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route path="/patientsList">
                <PatientsList/>
            </Route>
            <Route path="/overview">
                <Overview/>
            </Route>
        </Switch>
    );
}

export default App;
