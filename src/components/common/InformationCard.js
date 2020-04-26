import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from '../Styles';
import Avatar from "@material-ui/core/Avatar";

export default function InformationCard(props) {
  const styles = useStyles();
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" item xs={3} spacing={2}>
      <Grid item xs={4}>
        <Avatar
          src="https://webservices.scientificnet.org/rest/uisdata/api/v1/people/38064/image?w=260&amp;h=260"
          style={{width:100, height:100}}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography align="left" color="textPrimary" className={styles.informationCardName}>
          {props.name}
        </Typography>
        <Typography align="left" className={styles.informationCardDetail} color="textSecondary">
          {props.birthDate}
        </Typography>
        <Typography align="left" className={styles.informationCardDetail} color="textSecondary">
          {props.gender}
        </Typography>
        <Typography align="left" className={styles.informationCardDetail} color="textSecondary">
          {props.code}
        </Typography>
      </Grid>
    </Grid>
  );
}
