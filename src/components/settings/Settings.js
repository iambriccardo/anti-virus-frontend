import React from 'react';
import Typography from "@material-ui/core/Typography";
import TopBar from "../common/TopBar";
import useStyles from '../Styles';

export default function Settings() {
    const styles = useStyles();

    return (
        <>
            <TopBar title={'Settings '}/>
            <main className={styles.content}>
                <div className={styles.toolbar}/>
                <Typography style={{marginBottom: 50}}>[The settings section will be implemented in the future]</Typography>
                <Typography style={{fontStyle: "italic"}}>Thank you for trying the demo of our software! We hope you enjoyed it!</Typography>
                <Typography style={{fontStyle: "italic"}}>#EUvsVirus#staySafe</Typography>
            </main>
        </>

)
}
