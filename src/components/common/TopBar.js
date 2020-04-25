import React from "react";
import useStyles from "../Styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function TopBar() {
  const styles = useStyles();
  return (
    <AppBar
      className={styles.appBar}
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
