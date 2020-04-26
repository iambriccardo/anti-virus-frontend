import { Typography, Avatar } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import useStyles from '../Styles';

export default function PatientsTable() {
  const classes = useStyles();

  const rows = [{
    Name: "Ciao",
    Date: "Date"
  }]

  return (
    <TableContainer component={Paper}>
      <Table className={classes.tabTable} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Tag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name}>
              <TableCell component="th" scope="row">
                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar
                      src="https://webservices.scientificnet.org/rest/uisdata/api/v1/people/38064/image?w=260&amp;h=260"
                    />
                  </Grid>
                  <Grid item>
                    <Typography>{row.Name}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">
                {' '}
                <Chip label={row.Tag} color="primary" style={{ backgroundColor: row.Tag }} />{' '}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
