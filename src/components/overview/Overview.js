import {useQuery} from '@apollo/react-hooks';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import gql from 'graphql-tag';
import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {Map} from '../common/Map';
import StatusCard from '../common/StatusCard';
import TopBar from '../common/TopBar';
import useStyles from '../Styles';
import {DOCTOR_ROLE_TYPE} from "../../constants/constants";

const GET_PATIENTS_OF_DOCTOR = gql`
  query patientsOfDoctor($doctorId: Int) {
    patientsOfDoctor(doctorId: $doctorId) {
      id
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
  }
`;

const GET_PATIENTS_OF_HOSPITAL = gql`
  query patientsOfHospital($hospitalId: Int) {
    patientsOfHospital(hospitalId: $hospitalId) {
      id
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
  }
`;


function filterByRisk(data, riskLevel) {
    const mediaTypes = data
            .map(patient => patient.riskScore) // get all media types
            .filter((riskScore, index, array) => array.indexOf(riskScore) === index), // filter out duplicates
        counts = mediaTypes
            .map(riskScore => ({
                type: riskScore,
                count: data.filter(item => item.riskScore === riskScore).length
            }));
    const total = counts.filter(risk => (risk.type === riskLevel)).map(filteredRisk => filteredRisk.count);
    return total.reduce((a, b) => a + b, 0)
}


export default function Overview({basePath, activeRole}) {
    const styles = useStyles();

    const history = useHistory();

    const id = useSelector((state) => state.activeRole.id);

    const isDoctor = activeRole.type === DOCTOR_ROLE_TYPE;

    const {loading, error, data} = useQuery(isDoctor ? GET_PATIENTS_OF_DOCTOR : GET_PATIENTS_OF_HOSPITAL, {
        variables: {
            doctorId: isDoctor ? activeRole.id : undefined,
            hospitalId: !isDoctor ? activeRole.id : undefined,
        }
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const newData = isDoctor ? data.patientsOfDoctor : data.patientsOfHospital;

    const boxes = [
        {
            title: 'Total Patients',
            value: newData.length,
            risk: "",
        },
        {
            title: 'Serious Patients',
            value: filterByRisk(newData, "HIGH") + filterByRisk(newData, "CRITICAL"),
            risk: "HIGH",
        },

        {
            title: 'Low Risk Patients',
            value: filterByRisk(newData, "LOW"),
            risk: "LOW"
        },
    ];
    return (
        <>
            <TopBar title={'Overview ' + activeRole.type}/>
            <main className={styles.content}>
                <div className={styles.toolbar}/>
                <div className={styles.rowContainer}>
                    <Grid container className={styles.root} direction="row" spacing={3} justify="space-between">
                        {boxes.map((box, index) => (
                            <StatusCard risk={box.risk} key={index} title={box.title} value={box.value} xs={12 / boxes.length}/>
                        ))}
                    </Grid>
                </div>
                <div style={{marginBottom: 20}} className={styles.mapContainer}>
                    <Map
                        defaultLat={newData !== undefined && newData.length > 0 ? newData[0].homeLat : 0}
                        defaultLon={newData !== undefined && newData.length > 0 ? newData[0].homeLon : 0}
                        markers={newData.map((patient) => ({
                            id: patient.id,
                            lat: patient.homeLat,
                            lon: patient.homeLon,
                        }))}
                        onMarkerClick={(id, lat, lon) => history.push(`${basePath}/patient/${id}`)}
                    />
                </div>
            </main>
        </>
    );
}
