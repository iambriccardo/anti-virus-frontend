import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#000000",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },

    //Patient
    patientGrid: {
      height: 110,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    patientText: {
      height: 20,
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.primary,
    },

    graphAndMap: {
      height: 490,
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },

    vertical: {
      height: 27,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    topBarCard: {
      height: 110,
      topBarCardValue: {
        fontSize: 40,
        fontWeight: "normal",
      },
    },

    mapContainer: {
      height: "50vh",
      width: "100%",
    },

  }));