import { useQuery } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ArrowBack } from '@material-ui/icons';
import gql from 'graphql-tag';
import React from 'react';
import { useParams } from 'react-router-dom';
import InformationCard from '../common/InformationCard';
import { Map } from '../common/Map';
import StatusCard from '../common/StatusCard';
import TopBar from '../common/TopBar';
import useStyles from '../Styles';

const GET_PATIENT_BY_ID = gql`
  query($patientId: Int!) {
    singlePatient(patientId: $patientId) {
      fiscalCode
      name
      surname
      dateOfBirth
      familyMembers
      homeLat
      homeLon
      imageUrl
      riskScore
    }
    symptomsOfPatient(patientId: $patientId) {
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

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  let temperature = 'N/A';
  if (data.symptomsOfPatient[0] !== undefined) {
    temperature = data.symptomsOfPatient[0].bodyTemperature;
  }

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

            <StatusCard
              risk={data.singlePatient.riskScore}
              value={data.singlePatient.riskScore !== null ? data.singlePatient.riskScore : 'N/A'}
              title={'Estimated Risk'}
              xs={3}
            />
            <StatusCard value={temperature} title={'Fever'} xs={3} />
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
                  <Map
                    defaultLat={data !== undefined ? data.singlePatient.homeLat : 0}
                    defaultLon={data !== undefined ? data.singlePatient.homeLon : 0}
                    markers={[
                      { id: data.singlePatient.id, lat: data.singlePatient.homeLat, lon: data.singlePatient.homeLon },
                    ]}
                  />
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
