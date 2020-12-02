import React, { memo, useState } from "react";
import {
  makeStyles,
  Paper,
  List,
  ListItem,
  Box,
  IconButton,
  Divider,
} from "@material-ui/core";
import { Menu, ArrowBackIos } from "@material-ui/icons";
import PropTypes from "prop-types";
import { uuid } from "../utils";
import SidebarItem from "./SidebarItem";
import { useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const { listSidebar, isTop, setIsOpenLogout } = props;
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const onClick = () => {
    setOpen(!open);
    if (!isSidebar) {
      setIsSidebar(true);
      setOpen(true);
    }
  };

  const onOpenLogout = () => {
    setIsOpenLogout(true);
  };

  return (
    <Paper
      className={`${classes.sidebar} ${
        isTop || isSidebar ? classes.sidebarOpen : classes.sidebarClose
      }`}
      elevation={1}
      square
    >
      {!isTop && (
        <ListItem className={`center-root ${classes.sidebarAction}`}>
          {isSidebar && <Box flexGrow={1} />}
          <IconButton
            className={classes.IconButton}
            edge={isSidebar ? "end" : "start"}
            onClick={() => setIsSidebar(!isSidebar)}
          >
            {isSidebar ? <ArrowBackIos /> : <Menu />}
          </IconButton>
        </ListItem>
      )}
      <Divider />
      <List className={classes.list}>
        {listSidebar.map((item, index) => (
          <div onClick={item.path ? onClick : onOpenLogout} key={uuid()}>
            <SidebarItem
              item={item}
              key={uuid()}
              isSelected={item.path === location.pathname}
            />
          </div>
        ))}
      </List>
    </Paper>
  );
};

export const SIDEBAR_WIDTH_OPEN = 240;
export const SIDEBAR_WIDTH_CLOSE = 64;

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: SIDEBAR_WIDTH_OPEN,
    height: "100vh",
    flexShrink: 0,
    whiteSpace: "nowrap",
    overflow: "auto",
    backgroundColor: "rgb(48, 92, 139)",
  },
  sidebarOpen: {
    width: SIDEBAR_WIDTH_OPEN,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  sidebarClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: SIDEBAR_WIDTH_CLOSE,
  },
  sidebarAction: { minHeight: "60px", padding: "0 20px", marginBottom: "-7px" },
  list: { padding: 0 },
  IconButton: { color: "#ffffff" },
}));

Sidebar.propTypes = {
  listSidebar: PropTypes.array,
  isTop: PropTypes.bool,
};

export default memo(Sidebar);
