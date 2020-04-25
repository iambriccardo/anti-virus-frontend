import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import SideBar from "../common/SideBar";
import TopBar from "../common/TopBar";
import useStyles from "../Styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";

function Hospital() {
  const styles = useStyles();

  const info = [
    {
      title: "New Patients",
      value: 2,
    },
    {
      title: "Monitoring",
      value: 4,
    },
    {
      title: "Solved",
      value: 1,
    },
  ];

  return (
    <div className={styles.root}>
      <TopBar title="Hospital" />
      <CssBaseline />
      <SideBar />
      <main className={styles.content}>
        <div className={styles.toolbar} />

        <Grid container className={(styles.root, styles.rowContainer)}>
          <Grid item xs={12}>
            <Grid container justify="space-between">
              {info.map((info) => (
                <Grid key={info.value} item>
                  <Card className={styles.topBarCard} variant="outlined">
                    <CardContent alignItems="center">
                      <Typography
                        align="center"
                        className={styles.topBarCardTitle}
                        color="textSecondary"
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        align="center"
                        className={styles.topBarCardValue}
                      >
                        {info.value}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Card className={(styles.root, styles.rowContainer)} variant="outlined">
          <CardContent>
            <Typography>Insert Map Here</Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Action Button</Button>
          </CardActions> */}
        </Card>

        <Card className={(styles.root, styles.rowContainer)} variant="outlined">
          <CardContent>
            <Typography>Insert Graphs Here</Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Action Button</Button>
          </CardActions> */}
        </Card>
      </main>
    </div>
  );
}

export default Hospital;
