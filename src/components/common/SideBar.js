import React from "react";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleOutline from "@material-ui/icons/PeopleOutline";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import { Link } from "react-router-dom";
import useStyles from "../Styles";

export default function SideBar() {
  const styles = useStyles();
  const menuItems = [
    {
      label: "Overview",
      link: "/hospital",
      icon: <EqualizerOutlinedIcon />,
    },
    {
      label: "Patients",
      link: "/doctor",
      icon: <PeopleOutline />,
    },
  ];
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
        {menuItems.map((item) => (
          <Link to={item.link} style={{ textDecoration: "none" }}>
            <ListItem button key={item.label} className={styles.listItem}>
              <ListItemIcon className={styles.menuIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <Link to={"/settings"} style={{ textDecoration: "none" }}>
          <ListItem button key="Settings" className={styles.listItem}>
            <ListItemIcon className={styles.menuIcon}>
              <SettingsOutlined />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}
