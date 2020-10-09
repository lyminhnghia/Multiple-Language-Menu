import React, { memo, useState } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Drawer,
  IconButton,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import PropTypes from "prop-types";
import { uuid } from "../utils";

const Sidebar = (props) => {
  const { listSidebar, children } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Box className={classes.toolbar}>
          <IconButton onClick={() => setOpen(!open)}>{<Menu />}</IconButton>
        </Box>
        <Divider />
        <List>
          {listSidebar.map((data) => (
            <ListItem button key={uuid()}>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.content} />
            </ListItem>
          ))}
        </List>
        <main className={classes.content}>{children}</main>
      </Drawer>
    </div>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: `flex`,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

Sidebar.propTypes = {
  listSidebar: PropTypes.array,
  children: PropTypes.node,
};

export default memo(Sidebar);
