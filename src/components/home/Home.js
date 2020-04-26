import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, useRouteMatch } from 'react-router';
import { Route } from 'react-router-dom';
import SideBar from '../common/SideBar';
import Overview from '../overview/Overview';
import PatientsList from '../patientsList/PatientsList';
import useStyles from '../Styles';
import Patient from '../patient/Patient';

export default function Home() {
  const styles = useStyles();

  const activeRole = useSelector((state) => state.activeRole);

  const { path } = useRouteMatch();

  return (
    <div className={styles.root}>
      <SideBar path={path} />
      <Switch>
        <Route path={`${path}/overview`}>
          <Overview basePath={path} activeRole={activeRole} />
        </Route>
        <Route path={`${path}/patientsList`}>
          <PatientsList basePath={path} activeRole={activeRole} />
        </Route>
        <Route path={`${path}/patient/:id`}>
            <Patient />
        </Route>
      </Switch>
    </div>
  );
}
