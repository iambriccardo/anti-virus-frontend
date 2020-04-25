import React from "react";
import {Redirect, Switch, useLocation, useRouteMatch} from "react-router";
import {Route} from "react-router-dom";
import PatientsList from "../patientsList/PatientsList";
import Overview from "../overview/Overview";
import SideBar from "../common/SideBar";
import useStyles from "../Styles";


export default function Home() {
    const {path, url} = useRouteMatch();
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <SideBar path={useLocation()}/>
            <Switch>
                <Route path="/doctor">
                    <Route exact path="/doctor/overview">
                        <Overview userType="doctor"/>
                    </Route>
                    <Route exact path="/doctor/patientsList">
                        <PatientsList userType="doctor"/>
                    </Route>
                    <Redirect to="/doctor/overview"/>
                </Route>
                <Route path="/hospital">
                    <Route exact path="/hospital/overview">
                        <Overview userType="hospital"/>
                    </Route>
                    <Route exact path="/hospital/patientsList">
                        <PatientsList userType="hospital"/>
                    </Route>
                    <Redirect to="/hospital/overview"/>
                </Route>
            </Switch>
        </div>
    )
}
