import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';

function App() {
  const activeRole = useSelector((state) => state.activeRole);

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      { activeRole !== undefined && (
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
