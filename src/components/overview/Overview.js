import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import SideBar from "../common/SideBar";
import TopBar from "../common/TopBar";
import useStyles from "../Styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import GoogleMapReact from "google-map-react";
import StatusCard from "../common/StatusCard";
import Marker from "../images/marker.png";


export default function Overview() {
  const styles = useStyles();

  const boxes = [
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
    {
      title: "prova",
      value: 2,
    },
  ];

  const positions = [
    {

    }
  ]

  return (
      <div className={styles.root}>
        <TopBar title="Overview"/>
        <CssBaseline/>
        <SideBar/>
        <main className={styles.content}>
          <div className={styles.toolbar}/>
          <div className={styles.rowContainer}>
            <Grid
                container
                className={styles.root}
                direction="row"
                spacing={3}
                justify="space-between"
          >
            {boxes.map((box) => (
              <StatusCard
                title={box.title}
                value={box.value}
                xs={boxes.length}
              />
            ))}
          </Grid>
        </div>
        <div style={{ marginBottom: 20 }} className={styles.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCTPeJ6h7Xj84VCrmyJhlmMfIrZIRcmwyc",
            }}
            defaultCenter={{ lat: 46.4936, lng: 11.3346 }}
            defaultZoom={14}
          >
            <img lat={46.4936} lng={11.3346} src={Marker} alt={""}/>
          </GoogleMapReact>
        </div>

        <Card className={(styles.root, styles.rowContainer)} variant="outlined">
          <CardContent>
            <Typography>Insert Graphs Here</Typography>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
