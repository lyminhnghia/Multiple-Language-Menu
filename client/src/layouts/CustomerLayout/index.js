import React, { memo, useState } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Menu,
  Restaurant,
  Close,
  Translate,
  Storefront,
  RoomService,
} from "@material-ui/icons";
import { LangConstant, PathConstant } from "../../const";
import { useTranslation } from "react-i18next";

const CustomerLayout = ({ children }) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [open, setOpen] = useState(false);

  const onDrawerOpen = () => {
    setOpen(true);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  const listSidebar = [
    {
      text: "Đặt món ăn",
      IconComponent: <Restaurant />,
      isNewTab: false,
      // path: PathConstant.,
    },
    {
      text: "Lịch sử",
      IconComponent: <RoomService />,
      isNewTab: false,
      // path: PathConstant.,
    },
    {
      text: "Nhà hàng",
      IconComponent: <Storefront />,
      isNewTab: false,
      // path: PathConstant.,
    },
    {
      text: "Language",
      IconComponent: <Translate />,
      isNewTab: false,
      // path: PathConstant.,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            onClick={onDrawerOpen}
            edge="start"
            disableRipple
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h3" noWrap className={classes.Title}>
            MENUUU
          </Typography>
          <IconButton className={classes.orderButton} disableRipple>
            <Restaurant />
          </IconButton>
        </Toolbar>
      </AppBar>
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
        <div className={classes.toolbar}>
          <IconButton onClick={onDrawerClose} disableRipple>
            <Close />
          </IconButton>
        </div>
        <List>
          {listSidebar.map((data) => (
            <ListItem button key={data.text} className={classes.parentItem}>
              <ListItemIcon className={classes.itemIcon}>
                {data.IconComponent}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={classes.text}>{data.text}</Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const drawerWidth = 190;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#ffffff",
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: "1px solid #bdbdbd",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    borderBottom: "1px solid #bdbdbd",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    margin: "0 36px 0 0",
    width: 56,
    height: 56,
  },
  orderButton: {
    marginLeft: 36,
    width: 56,
    height: 56,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    borderRight: "1px solid #bdbdbd",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    display: "none",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  toolBar: {
    padding: 0,
  },
  Title: {
    width: "100%",
    textAlign: "center",
    color: "#000000",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  itemIcon: {
    minWidth: 38,
    color: "inherit",
  },
  text: {
    fontSize: 16,
    color: "inherit",
  },
  parentItem: {
    color: "#000000",
    "&:hover": {
      color: "rgb(48, 92, 139)",
    },
    "&:selected": {
      color: "rgb(48, 92, 139)",
    },
  },
}));

export default memo(CustomerLayout);
