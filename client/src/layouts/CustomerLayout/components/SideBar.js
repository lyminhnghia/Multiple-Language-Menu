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
  const { isTop } = props;
  const [isSidebar, setIsSidebar] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const checkDefault = [PathConstant.MANAGE_BOOKS];
  const SIDEBAR_DEFAULT_PATHS = {
    books: {
      id: "books",
      IconComponent: <DateRangeOutlined />,
      text: "Đặt chỗ",
      path: PathConstant.CUSTOMER_CATEGORY,
      allPath: [PathConstant.CUSTOMER_CATEGORY],
      isNewTab: false,
    },
    news: {
      id: "news",
      IconComponent: <SettingsOutlined />,
      text: "Quản lý",
      path: PathConstant.CUSTOMER_CATEGORY,
      isNewTab: false,
      allPath: [PathConstant.CUSTOMER_CATEGORY],
    },
  };

  const [openChild, setOpenChild] = useState({
    books: SIDEBAR_DEFAULT_PATHS.books.allPath.includes(location.pathname),
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

  useEffect(() => {
    if (isSidebar) {
      if (Boolean(sidebarTimeout)) {
        clearSidebarTimeout();
      }
      sidebarTimeout = setTimeout(() => {
        setIsSidebar(false);
      }, SIDEBAR_TIMEOUT);
    }
  }, [isSidebar, setIsSidebar]);

  const renderBar = (sideBarElements) => {
    return (
      <List className={classes.list}>
        {Object.keys(sideBarElements).map((key) => {
          return !sideBarElements[key].children ? (
            <SidebarItem
              item={sideBarElements[key]}
              isSelected={sideBarElements[key].path === location.pathname}
              key={uuid()}
              openChild={null}
            />
          ) : (
            <React.Fragment key={uuid()}>
              <div onClick={() => onClick(key)}>
                <SidebarItem
                  item={sideBarElements[key]}
                  id={key}
                  isSelected={
                    sideBarElements[key].path === location.pathname ||
                    (sideBarElements[key].allPath &&
                      sideBarElements[key].allPath.includes(location.pathname))
                  }
                  key={uuid()}
                  openChild={
                    sideBarElements[key].allPath.length > 1
                      ? openChild[key]
                      : null
                  }
                />
              </div>
              {isSidebar === true ? (
                <Collapse
                  in={openChild[key]}
                  timeout="auto"
                  key={uuid()}
                  unmountOnExit
                >
                  {sideBarElements[key].children.map((child) => (
                    <SidebarItem
                      item={child}
                      key={uuid()}
                      openChild={null}
                      isSubItem={child.path.includes(location.pathname)}
                    />
                  ))}
                </Collapse>
              ) : (
                ""
              )}
            </React.Fragment>
          );
        })}
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
        {isSidebar && <Box flexGrow={1} />}

        <IconButton
          edge={isSidebar ? "end" : "start"}
          onClick={() => setIsSidebar(!isSidebar)}
          onMouseEnter={handleEnter}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover ? isSidebar ? <ArrowBack /> : <ArrowForward /> : <Menu />}
        </IconButton>
      </ListItem>
      {checkDefault.includes(location.pathname) &&
        renderBar(SIDEBAR_DEFAULT_PATHS)}
    </Paper>
  );
};

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

var sidebarTimeout = null;
const clearSidebarTimeout = () => {
  clearTimeout(sidebarTimeout);
  sidebarTimeout = null;
};

export const SIDEBAR_WIDTH_OPEN = 240;
export const SIDEBAR_WIDTH_CLOSE = 64;
export const SIDEBAR_TIMEOUT = 50000;

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: SIDEBAR_WIDTH_OPEN,
    height: "100%",
    flexShrink: 0,
    whiteSpace: "nowrap",
    overflow: "auto",
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
}));

Sidebar.propTypes = {
  data: PropTypes.bool,
};

Sidebar.defaultProps = {
  isTop: false,
};
export default memo(Sidebar);
