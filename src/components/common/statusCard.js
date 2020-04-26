import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from '../Styles';

export default function StatusCard(props) {
  const styles = useStyles();
  return (
    <Grid item xs={props.xs}>
      <Card className={styles.topBarCard} variant="outlined">
        <CardContent alignItems="center">
          <Typography align="center" className={styles.topBarCardTitle} color="textSecondary">
            {props.title}
          </Typography>
          <Typography align="center" className={styles.topBarCardValue}>
            {props.value}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
