import React from "react";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PeopleOutline from "@material-ui/icons/PeopleOutline";
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';

import useStyles from "../Styles";

export default function SideBar() {
  const styles = useStyles();
  return (
    <Drawer
      className={styles.drawer}
      variant="permanent"
      classes={{
        paper: styles.drawerPaper,
      }}
      anchor="left"
    >
      <div className={styles.toolbar} />
      <Divider classes={styles.listItem} />
      <List>
        {["Overview", "Patients"].map((text, index) => (
          <ListItem button key={text} className={styles.listItem}>
            <ListItemIcon className={styles.menuIcon}>
              {index % 2 === 0 ? <EqualizerOutlinedIcon /> : <PeopleOutline />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItem button key="Settings" className={styles.listItem}>
            <ListItemIcon className={styles.menuIcon}>
                <SettingsOutlined />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
      </List>
    </Drawer>
  );
}
