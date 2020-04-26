import { useQuery } from '@apollo/react-hooks';
import { Avatar, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import gql from 'graphql-tag';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from '../Styles';



export default function PatientsTable({data, basePath}) {
  const classes = useStyles();

  const history = useHistory();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.tabTable} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name and surname</TableCell>
            <TableCell>Gravity estimation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data !== undefined &&
            data.map((patient) => (
              <TableRow key={patient.id} onClick={() => history.push(`${basePath}/patient/${patient.id}`)}>
                <TableCell component="th" scope="row">
                  <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                    <Grid item>
                      <Avatar src={patient.imageUrl} />
                    </Grid>
                    <Grid item>
                      <Typography>{`${patient.name} ${patient.surname}`}</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Chip label={'N/A'} color="primary" />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
