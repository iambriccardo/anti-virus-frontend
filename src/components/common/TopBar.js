import React from "react";
import useStyles from "../Styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function TopBar(props) {
  const styles = useStyles();
  return (
    <AppBar
      className={styles.appBar}
      classes={{
        paper: styles.topBarPaper,
      }}
      elevation={1}
      style={{background: "white", width: `calc(100% - ${240}px)`}}
    >
      <Toolbar>
        <Typography variant="h6" noWrap className={styles.topBarTitle}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
