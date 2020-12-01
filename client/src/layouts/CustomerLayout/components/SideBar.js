import React, { memo, useState, useEffect } from "react";
import {
  makeStyles,
  Paper,
  Box,
  List,
  ListItem,
  IconButton,
  Collapse,
} from "@material-ui/core";
import {
  ArrowForward,
  ArrowBack,
  Menu,
  Close,
  SettingsOutlined,
  DateRangeOutlined,
} from "@material-ui/icons";
import SidebarItem from "./SidebarItem";
import { uuid } from "../../../utils";
import { PathConstant } from "../../../const";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Sidebar = (props) => {
  const location = useLocation();
  const classes = useStyles();
  const { isSidebar, setIsSidebar } = props;
  const [isHover, setIsHover] = useState(false);
  const checkDefault = [PathConstant.MANAGE_BOOKS];

  const SIDEBAR_DEFAULT_PATHS = {
    sidebar: {
      id: "books",
      IconComponent: <DateRangeOutlined />,
      text: "Đặt chỗ",
      path: PathConstant.CUSTOMER_CATEGORY,
      allPath: [PathConstant.CUSTOMER_CATEGORY],
      isNewTab: false,
    },
  };

  const [openChild, setOpenChild] = useState({
    books: SIDEBAR_DEFAULT_PATHS.sidebar.allPath.includes(location.pathname),
  });

  const onClick = (id) => {
    if (isSidebar) {
      setOpenChild({ ...openChild, [id]: !openChild[id] });
    } else {
      setIsSidebar(true);
      if (!openChild[id]) {
        setOpenChild({ ...openChild, [id]: !openChild[id] });
      }
    }
  };
  const handleEnter = () => {
    setIsHover(true);
  };

  const renderBar = (sideBarElements) => {
    return (
      <List className={classes.list}>
        <div onClick={() => onClick(0)}>
          <SidebarItem
            item={sideBarElements}
            id={0}
            // isSelected={
            //   sideBarElements[0].path === location.pathname ||
            //   (sideBarElements[0].allPath &&
            //     sideBarElements[0].allPath.includes(location.pathname))
            // }
            key={uuid()}
          />
        </div>
      </List>
    );
  };

  return (
    <Paper
      className={`${classes.sidebar} ${
        isSidebar ? classes.sidebarOpen : classes.sidebarClose
      }`}
      elevation={1}
      square
    >
      <ListItem className={`center-root ${classes.sidebarAction}`} key={uuid()}>
        <IconButton
          onClick={() => setIsSidebar(!isSidebar)}
          onMouseEnter={handleEnter}
          onMouseLeave={() => setIsHover(false)}
          className={classes.iconButtonClose}
        >
          <Close className={classes.iconClose} />
        </IconButton>
      </ListItem>
      {checkDefault.includes(location.pathname) &&
        renderBar(SIDEBAR_DEFAULT_PATHS.sidebar)}
    </Paper>
  );
};

export const SIDEBAR_WIDTH_OPEN = 190;
export const SIDEBAR_WIDTH_CLOSE = 0;

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: SIDEBAR_WIDTH_OPEN,
    height: "100%",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  sidebarOpen: {
    width: SIDEBAR_WIDTH_OPEN,
    height: "100%",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    overflowX: "hidden",
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
  sidebarAction: {
    height: 48,
    minHeight: 48,
    padding: 0,
  },
  list: {
    padding: 0,
  },
  iconButtonClose: {
    padding: 10,
  },
  iconClose: { width: 28, height: 28 },
}));

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default memo(Sidebar);
