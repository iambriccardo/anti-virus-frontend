import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from '../Styles';
import {IconButton} from '@material-ui/core';

export default function TopBar(props) {
    const styles = useStyles();
    return (
        <AppBar
            elevation={0}
            style={{background: '#fafafa', width: `calc(100% - ${240}px)`}}
        >
            <Toolbar>
                {props.icon !== undefined && (
                    <IconButton>
                        <Typography className={styles.topBarTitleIcon}>
                            {props.icon}
                        </Typography>
                    </IconButton>
                )}
                <Typography variant="h6" noWrap className={styles.topBarTitle}>
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
