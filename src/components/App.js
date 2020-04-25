import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Doctor from './doctor/Doctor';
import Hospital from './hospital/Hospital';
import Login from './login/Login';

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
    </Switch>
  );
}

export default App;
