import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GoogleMapReact from "google-map-react";
import React from "react";
import gql from 'graphql-tag';
import {Redirect, useParams, useHistory} from "react-router";
import StatusCard from "../common/StatusCard";
import TopBar from "../common/TopBar";
import Circle from "../images/circle.png";
import useStyles from "../Styles";
import {useQuery} from "@apollo/react-hooks";
import {useSelector} from 'react-redux';
import store from "../../redux/store";


function DoctorOverview() {
}

function HospitalOverview() {
}

const GET_PATIENTS = gql`
  query patientsOfDoctor($doctorId: Int!) {
  patientsOfDoctor(doctorId: $doctorId) {
    id
    homeLat
    homeLon
    name
    surname
  }
}
`;

export default function Overview(props) {
    const styles = useStyles();

    const history = useHistory();

    const id = useSelector((state) => state.activeRole.id);

    const {loading, error, data} = useQuery(GET_PATIENTS, {
        variables: {
            doctorId: id,
        },
    });


    const boxes = [
        {
            title: 'New Patients',
            value: 2,
        },
        {
            title: 'Monitoring',
            value: 4,
        },
        {
            title: 'Solved',
            value: 1,
        },
        {
            title: 'prova',
            value: 2,
        },
    ];


    console.log(store.dispatch);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            <TopBar title={'Overview ' + props.activeRole.type}/>
            <main className={styles.content}>
                <div className={styles.toolbar}/>
                <div className={styles.rowContainer}>
                    <Grid container className={styles.root} direction="row" spacing={3} justify="space-between">
                        {boxes.map((box) => (
                            <StatusCard title={box.title} value={box.value} xs={12 / boxes.length}/>
                        ))}
                    </Grid>
                </div>
                <div style={{marginBottom: 20}} className={styles.mapContainer}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyCTPeJ6h7Xj84VCrmyJhlmMfIrZIRcmwyc',
                        }}
                        defaultCenter={{lat: 46.4936, lng: 11.3346}}
                        defaultZoom={0}
                    >
                        {data.patientsOfDoctor.map((patient) => (
                            <img lat={patient.homeLat} lng={patient.homeLon} src={Circle} alt={''} style={{height:15, width:15}} onClick={(event => {
                                history.push("patient/"+patient.id)
                            })
                            } />
                        ))}

                    </GoogleMapReact>
                </div>

                <Card className={(styles.root, styles.rowContainer)} variant="outlined">
                    <CardContent>
                        <Typography>Insert Graphs Here</Typography>
                    </CardContent>
                </Card>
            </main>
        </>
    );
}
