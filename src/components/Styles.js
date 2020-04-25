import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  mainContainer: {
    backgroundColor: "#F7F8FC",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#000000",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: "#363740",
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#363740",
  },
  topBarPaper: {
    width: drawerWidth,
    background: "white !important",
  },
  topBarCard: {
    height: 110,
  },
  rowContainer: {
    marginBottom: 20,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  topBarCardValue: {
    fontSize: 40,
    fontWeight: "normal",
  },
  listItem: {
    color: "#A4A6B3",
  },
  menuIcon: {
    color: "#A4A6B3",
  },
  topBarTitle: {
    color: "black",
  },
  mapContainer: {
    height: "50vh",
    width: "100%",
  },
  activeDrawerOption: {
    color: "red",
    background: "green",
  },
  activeMenuLabel: {
      color:"#DDE2FF",
  },
  activeMenuIcon: {
      color:"#DDE2FF",
  },
  activeListItem: {
      backgroundColor: "#9FA2B41A",
      "&:hover": {
          backgroundColor: "#9FA2B41A",
      },
  },
  loginField: {
    width: "100%",
    color:"#DDe2ff"
  },
  loginContainer: {
    marginBottom: 15
  },
  loginTitle: {
    fontSize: 25,
    marinBottom: 25,
  },
}));
