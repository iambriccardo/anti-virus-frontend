import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import InformationCard from '../common/InformationCard';
import StatusCard from '../common/StatusCard';
import TopBar from '../common/TopBar';
import useStyles from '../Styles';
import {
  useParams
} from "react-router-dom";

export default function Patient() {
  const boxes = [
    {
      title: 'Estimated Risk',
      value: 'Low',
    },

    {
      title: 'Fever',
      value: 39.2,
    },

    {
      title: 'Family Members',
      value: 4,
    },
  ];

  const infos = [
    {
      name: 'Estimated Risk',
      birthDate: 'Low',
      gender: 'M',
      code: 'wertz654345tzhgfd',
    },
  ];

  const classes = useStyles();
  
  const {id} = useParams();

  return (
    <div className={classes.root}>
      <TopBar />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Grid container spacing={3}>
            {infos.map((box) => (
              <InformationCard name={box.name} birthDate={box.birthDate} gender={box.gender} code={box.code} />
            ))}

            {boxes.map((box) => (
              <StatusCard value={box.value} title={box.title} xs={3} />
            ))}
            <Grid item xs={6}>
              <Paper className={classes.patientText}>Fever History</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.patientText}>Home Location</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.graphAndMap}></Paper>
            </Grid>
            <Grid item xs={6}>
              <div style={{ marginBottom: 20 }} className={classes.mapContainer}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyCTPeJ6h7Xj84VCrmyJhlmMfIrZIRcmwyc',
                  }}
                  defaultCenter={{ lat: 46.4936, lng: 11.3346 }}
                  defaultZoom={14}
                ></GoogleMapReact>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.patientText}>Medical Information</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.patientText}>Chat</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.graphAndMap}>
                <Typography>Hello I have no fever.</Typography>
                <Typography>Yesterday I had some fever.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.graphAndMap}>Map</Paper>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}
