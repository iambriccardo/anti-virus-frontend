import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Doctor from './doctor/Doctor';
import Hospital from './hospital/Hospital';
import Login from './login/Login';
import Patient from './patient/Patient';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/doctor">
        <Doctor />
      </Route>
      <Route path="/hospital">
        <Hospital />
      </Route>
      <Route path="/patient">
        <Patient />
      </Route>
    </Switch>
  );
}

export default App;
