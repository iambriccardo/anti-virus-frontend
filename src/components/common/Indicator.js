import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";

export default function Indicator(props) {
    return (
        <Grid item container>
            <Grid item xs={3}>
                <Typography align={"left"}>{props.name}</Typography>
            </Grid>
            <Grid container item xs={9} direction="column" align="center" justify="space-around">
                <Grid item>
                    {Array.isArray(props.value) ?
                        (props.value.map((symptom) => symptom.value &&
                            <Typography align={"left"}>{"• " + symptom.name}</Typography>))
                        :
                        (
                            <LinearProgress variant="determinate" value={props.value}/>)}
                </Grid>
            </Grid>
        </Grid>
    )
}
