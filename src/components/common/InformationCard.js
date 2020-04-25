import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from '../Styles';

export default function InformationCard(props) {
  const styles = useStyles();
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" item xs={3}>
      <Grid item>
        <img
          className={styles.patientGrid}
          src="https://webservices.scientificnet.org/rest/uisdata/api/v1/people/38064/image?w=260&amp;h=260"
        />
      </Grid>
      <Grid item>
        <Typography align="center" color="textSecondary">
          {props.name}
        </Typography>
        <Typography align="center" className={styles.topBarCardValue} color="textSecondary">
          {props.birthDate}
        </Typography>
        <Typography align="center" className={styles.topBarCardValue} color="textSecondary">
          {props.gender}
        </Typography>
        <Typography align="center" className={styles.topBarCardValue} color="textSecondary">
          {props.birthDate}
        </Typography>
        <Typography align="center" className={styles.topBarCardValue} color="textSecondary">
          {props.code}
        </Typography>
      </Grid>
    </Grid>
  );
}
