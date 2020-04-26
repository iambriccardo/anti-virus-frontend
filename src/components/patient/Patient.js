import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import InformationCard from '../common/InformationCard';
import StatusCard from '../common/StatusCard';
import TopBar from '../common/TopBar';
import useStyles from '../Styles';
import Marker from "../images/marker.png";
import {useParams} from "react-router-dom";
import {ArrowBack} from "@material-ui/icons";

const GET_PATIENT_BY_ID = gql`
    query singlePatient($patientId: Int!) {
        singlePatient(patientId: $patientId) {
            fiscalCode
            name
            surname
            dateOfBirth
            familyMembers
            homeLat
            homeLon
            imageUrl
        }
    }
`;
const GET_TEMPERATURE = gql`
  query symptomsOfPatient($patientID: Int!) {
    symptomsOfPatient(patientId:1) {
        bodyTemperature
    }
}
`;

export default function Patient() {
   

    const infos = [
        {
            name: 'Giuseppe Verdi',
            birthDate: '01/01/2000',
            gender: 'M',
            code: 'wertz654345tzhgfd',
        },
    ];

    const classes = useStyles();

    const {id} = useParams();
    const idInt= parseInt(id);
    console.log(idInt)
    const{loading,error,data}=useQuery(GET_PATIENT_BY_ID, {
        variables: {
           patientId: idInt 
        },
      });
      
    const{loadingTemp,errorTemp,dataTemp}=useQuery(GET_TEMPERATURE, {
        variables: {
           patientId: idInt 
        },
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (loadingTemp) return 'Loading...';
    if (errorTemp) return `Error! ${error.message}`;

    return (
        <div className={classes.root}>
            <TopBar title="Patient Information" icon={<ArrowBack/>}/>
            <CssBaseline/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <div>
                    <Grid container spacing={3}>
                        {infos.map((box) => (
                            <InformationCard name={data.singlePatient.name+" "+data.singlePatient.surname} birthDate={data.singlePatient.dateOfBirth}
                             gender={" "} code={data.singlePatient.fiscalCode} src={data.singlePatient.imageUrl}/>
                        ))}

                        <StatusCard value={"Low"} title={"Estimated Risk"} xs={3}/>
                        <StatusCard value={"37"} title={"Fever"} xs={3}/>
                        <StatusCard value={data.singlePatient.familyMembers} title={"Family Members"} xs={3}/>

                        <Grid item container xs={6} spacing={2}>
                            <Grid item xs={12}>
                                <Typography className={classes.topBarTitle} variant="h6" elevation={0}>Fever
                                    History</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.graphAndMap} elevation={0} variant="outlined"/>
                            </Grid>
                        </Grid>

                        <Grid item container xs={6} spacing={2}>
                            <Grid item xs={12}>
                                <Typography className={classes.topBarTitle} variant="h6" elevation={0}>Home
                                    Location</Typography>
                            </Grid>
                            <Grid item xs={12} style={{height: 300,paddingTop:0, paddingBottom:0}}>
                                <div style={{marginBottom: 20, height: "100%"}}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{
                                            key: 'AIzaSyCTPeJ6h7Xj84VCrmyJhlmMfIrZIRcmwyc',
                                        }}
                                        defaultCenter={{lat: 46.4936, lng: 11.3346}}
                                        defaultZoom={14}
                                    />
                                    <img lat={data.singlePatient.homeLat} lng={data.singlePatient.homeLon} src={Marker} alt={''} />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item container xs={6} spacing={2}>
                            <Grid item xs={12}>
                                <Typography className={classes.topBarTitle} variant="h6" elevation={0}>Medical
                                    Information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.graphAndMap} elevation={0} variant="outlined">
                                    <Typography>Hello I have no fever.</Typography>
                                    <Typography>Yesterday I had some fever.</Typography>
                                </Paper>
                            </Grid>
                        </Grid>

                        <Grid item container xs={6} spacing={2}>
                            <Grid item xs={12}>
                                <Typography className={classes.topBarTitle} variant="h6" elevation={0}>Chat</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.graphAndMap} elevation={0} variant="outlined">Map</Paper>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </main>
        </div>
    );
}
