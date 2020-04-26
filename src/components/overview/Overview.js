import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GoogleMapReact from "google-map-react";
import React from "react";
import { useParams } from "react-router";
import StatusCard from "../common/StatusCard";
import TopBar from "../common/TopBar";
import Marker from "../images/marker.png";
import useStyles from "../Styles";

function DoctorOverview() {}

function HospitalOverview() {}

export default function Overview(props) {
  const styles = useStyles();

  const boxes = [
    {
      title: 'New Patients',
      value: 2,
    },
    {
      title: 'Monitoring',
      value: 4,
    },
    {
      title: 'Solved',
      value: 1,
    },
    {
      title: 'prova',
      value: 2,
    },
  ];

  const positions = [{}];
  console.log(useParams());

  return (
    <>
      <TopBar title={'Overview ' + props.activeRole.type} />
      <main className={styles.content}>
        <div className={styles.toolbar} />
        <div className={styles.rowContainer}>
          <Grid container className={styles.root} direction="row" spacing={3} justify="space-between">
            {boxes.map((box) => (
              <StatusCard title={box.title} value={box.value} xs={12 / boxes.length} />
            ))}
          </Grid>
        </div>
        <div style={{ marginBottom: 20 }} className={styles.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyCTPeJ6h7Xj84VCrmyJhlmMfIrZIRcmwyc',
            }}
            defaultCenter={{ lat: 46.4936, lng: 11.3346 }}
            defaultZoom={14}
          >
            <img lat={46.4936} lng={11.3346} src={Marker} alt={''} />
          </GoogleMapReact>
        </div>

        <Card className={(styles.root, styles.rowContainer)} variant="outlined">
          <CardContent>
            <Typography>Insert Graphs Here</Typography>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
