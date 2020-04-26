import {Avatar, Typography} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import {useHistory} from 'react-router-dom';
import useStyles from '../Styles';
import Button from "@material-ui/core/Button";
import {DOCTOR_ROLE_TYPE} from "../../constants/constants";
import {useSelector} from "react-redux";

function riskEvaluation(risk) {
    let color = '#3f51b5';
    switch (risk) {
        case 'LOW':
            color = '#29CC97';
            break;
        case 'MEDIUM':
            color = '#FF8E25';
            break;
        case 'HIGH':
            color = '#F12B2C';
            break;
        case 'CRITICAL':
            color = '#6d0202';
            break;
        default:
            color = '#bdbdbd';
            break;
    }
    return color;
}

export default function PatientsTable({data, basePath}) {
    const classes = useStyles();
    const activeRole = useSelector((state) => state.activeRole);
    const isDoctor = activeRole.type === DOCTOR_ROLE_TYPE;
    const history = useHistory();

    return (
        <Paper variant={'outlined'} elevation={0}>
            <Table className={classes.tabTable} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name and surname</TableCell>
                        <TableCell>Gravity estimation</TableCell>
                        {isDoctor && <TableCell>Emergency</TableCell> }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data !== undefined &&
                    data.map((patient) => (
                        <TableRow key={patient.id}>
                            <TableCell component="th" scope="row"
                                       onClick={() => (history.push(`${basePath}/patient/${patient.id}`), document.body.style.cursor = "default")}
                                       onMouseEnter={() => {
                                           document.body.style.cursor = "pointer";
                                       }}
                                       onMouseLeave={() => {
                                           document.body.style.cursor = "default";
                                       }}
                            >
                                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Avatar src={patient.imageUrl}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography>{`${patient.name} ${patient.surname}`}</Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Chip
                                    label={patient.riskScore != null ? patient.riskScore : "N/A"}
                                    style={{
                                        background: riskEvaluation(patient.riskScore),
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                />

                            </TableCell>
                            {isDoctor &&
                            <TableCell>
                                <Button variant="outlined" color="primary"
                                        onClick={(event => alert(patient.name + " " + patient.surname + " will be sent to Hospital!"))}>
                                    Send to Hospital
                                </Button>
                            </TableCell>
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
