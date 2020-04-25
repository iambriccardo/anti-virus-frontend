
import React from "react";
import useStyles from "../Styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";


export default function InformationCard(props) {
  const styles = useStyles();
  return (
    <Grid container direction={'row'} item xs={3}>
        <Grid item xs={5}>
            <Card className={styles.patientGrid}>Photo</Card>
        </Grid>
        <Grid item xs={7}>
            <Card className={styles.topBarCard} variant="outlined" >
                <CardContent alignItems="center">
                    <Typography
                        align="center"
                        color="textSecondary"
                    >
                        {props.name}
                    </Typography>
                    <Typography
                        align="center"
                        className={styles.topBarCardValue}
                        color="textSecondary"
                    >
                        {props.birthDate}
                    </Typography>
                    <Typography
                        align="center"
                        className={styles.topBarCardValue}
                        color="textSecondary"
                    >
                        {props.gender}
                    </Typography>
                    <Typography
                        align="center"
                        className={styles.topBarCardValue}
                        color="textSecondary"
                    >
                        {props.birthDate}
                    </Typography>
                    <Typography
                        align="center"
                        className={styles.topBarCardValue}
                        color="textSecondary"
                    >
                        {props.code}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
}