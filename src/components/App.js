import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import { useSelector } from 'react-redux';

function App() {
  const activeRole = useSelector((state) => state.activeRole);

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      {activeRole !== undefined && (
        <Route path={`/${activeRole.type}`}>
          <Home />
        </Route>
      )}
      <Route path="*">
          <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
