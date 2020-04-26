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
import {ArrowBack} from "@material-ui/icons";

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
            name: 'Giuseppe Verdi',
            birthDate: '01/01/2000',
            gender: 'M',
            code: 'wertz654345tzhgfd',
        },
    ];

    const classes = useStyles();

    const {id} = useParams();

    return (
        <div className={classes.root}>
            <TopBar title="Patient Information" icon={<ArrowBack/>}/>
            <CssBaseline/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <div>
                    <Grid container spacing={3}>
                        {infos.map((box) => (
                            <InformationCard name={box.name} birthDate={box.birthDate} gender={box.gender}
                                             code={box.code}/>
                        ))}

                        {boxes.map((box) => (
                            <StatusCard value={box.value} title={box.title} xs={3}/>
                        ))}

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
