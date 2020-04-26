import { useQuery } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ArrowBack } from '@material-ui/icons';
import GoogleMapReact from 'google-map-react';
import gql from 'graphql-tag';
import React from 'react';
import { useParams } from 'react-router-dom';
import InformationCard from '../common/InformationCard';
import StatusCard from '../common/StatusCard';
import TopBar from '../common/TopBar';
import Marker from '../images/marker.png';
import useStyles from '../Styles';

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
    symptomsOfPatient(patientId: 1) {
      bodyTemperature
    }
  }
`;

export default function Patient() {
  const classes = useStyles();

  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_PATIENT_BY_ID, {
    variables: {
      patientId: parseInt(id),
    },
  });

  const { loadingTemp, errorTemp } = useQuery(GET_TEMPERATURE, {
    variables: {
      patientId: parseInt(id),
    },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (loadingTemp) return 'Loading...';
  if (errorTemp) return `Error! ${error.message}`;

  return (
    <div className={classes.root}>
      <TopBar title="Patient Information" icon={<ArrowBack />} />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Grid container spacing={3}>
            <InformationCard
              name={data.singlePatient.name + ' ' + data.singlePatient.surname}
              birthDate={data.singlePatient.dateOfBirth}
              gender={' '}
              code={data.singlePatient.fiscalCode}
              src={data.singlePatient.imageUrl}
            />

            <StatusCard value={'Low'} title={'Estimated Risk'} xs={3} />
            <StatusCard value={'37'} title={'Fever'} xs={3} />
            <StatusCard value={data.singlePatient.familyMembers} title={'Family Members'} xs={3} />

            <Grid item container xs={6} spacing={2}>
              <Grid item xs={12}>
                <Typography className={classes.topBarTitle} variant="h6" elevation={0}>
                  Fever History
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.graphAndMap} elevation={0} variant="outlined" />
              </Grid>
            </Grid>

            <Grid item container xs={6} spacing={2}>
              <Grid item xs={12}>
                <Typography className={classes.topBarTitle} variant="h6" elevation={0}>
                  Home Location
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ height: 300, paddingTop: 0, paddingBottom: 0 }}>
                <div style={{ marginBottom: 20, height: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: 'AIzaSyCTPeJ6h7Xj84VCrmyJhlmMfIrZIRcmwyc',
                    }}
                    defaultCenter={{ lat: 46.4936, lng: 11.3346 }}
                    defaultZoom={14}
                  />
                  <img lat={data.singlePatient.homeLat} lng={data.singlePatient.homeLon} src={Marker} alt={''} />
                </div>
              </Grid>
            </Grid>

            <Grid item container xs={6} spacing={2}>
              <Grid item xs={12}>
                <Typography className={classes.topBarTitle} variant="h6" elevation={0}>
                  Medical Information
                </Typography>
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
                <Typography className={classes.topBarTitle} variant="h6" elevation={0}>
                  Chat
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.graphAndMap} elevation={0} variant="outlined">
                  Map
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}
