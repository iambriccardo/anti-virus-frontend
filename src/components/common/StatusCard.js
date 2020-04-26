import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from '../Styles';

export default function StatusCard(props) {
    const styles = useStyles();
    let className = "";
    let textClassName = styles.statusCardValueWhite;
    let color = {color: "white"};
    switch (props.risk) {
        case "LOW":
            className = styles.statusCardLow;
            break;
        case "MEDIUM":
            className = styles.statusCardMedium;
            break;
        case "HIGH":
            className = styles.statusCardHigh;
            break;
        case "CRITICAL":
            className = styles.statusCardCritical;
            break;
        default:
            className = styles.statusCard;
            textClassName = styles.statusCardValue;
            color = {color: "#0000008a"};
            break;
    }
    return (
        <Grid item xs={props.xs}>
            <Card className={className} variant="outlined">
                <CardContent alignItems="center">
                    <Typography align="center" style={color}>
                        {props.title}
                    </Typography>
                    <Typography align="center" className={textClassName}>
                        {props.value}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
