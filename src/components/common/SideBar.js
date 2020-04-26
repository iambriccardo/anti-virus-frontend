import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from '../Styles';

export default function SideBar(props) {
  const styles = useStyles();

  const menuItems = [
    {
      label: 'Overview',
      link: `${props.path}/overview`,
      icon: <EqualizerOutlinedIcon />,
    },
    {
      label: 'Patients',
      link: `${props.path}/patientsList`,
      icon: <PeopleOutline />,
    },
  ];

  const { pathname } = useLocation();

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
        {menuItems.map((item, index) => (
          <MenuLink
            key={index}
            to={item.link}
            label={item.label}
            icon={item.icon}
            isActive={pathname === item.link}
          />
        ))}
      </List>
      <Divider />
      <List>
        <Link to={'settings'} style={{ textDecoration: 'none' }}>
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

function MenuLink({ to, label, icon, isActive }) {
  const styles = useStyles();

  const history = useHistory();

  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'unset' }}>
      <ListItem
        button
        key={label}
        className={isActive ? styles.activeListItem : styles.listItem}
        onClick={() => history.push(to)}
      >
        <ListItemIcon className={isActive ? styles.activeMenuIcon : styles.menuIcon}>{icon}</ListItemIcon>
        <ListItemText primary={label} className={isActive ? styles.activeMenuLabel : ''} />
      </ListItem>
    </Link>
  );
}
