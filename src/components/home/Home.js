import React from 'react';
import { Redirect, Switch, useLocation, useRouteMatch } from 'react-router';
import { Route } from 'react-router-dom';
import PatientsList from '../patientsList/PatientsList';
import Overview from '../overview/Overview';
import SideBar from '../common/SideBar';
import useStyles from '../Styles';
import { useSelector } from 'react-redux'

export default function Home() {
  const styles = useStyles();

  const { path } = useRouteMatch();
  const activeRole = useSelector(state => state.activeRole);
  console.log(activeRole);

  return (
    <div className={styles.root}>
      <SideBar />
      <Switch>
      </Switch>
    </div>
  );
}
