import React, { memo, useState, useEffect } from "react";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  IconButton,
  Box,
} from "@material-ui/core";
import {
  Store,
  AddCircle,
  Menu,
  AccountBox,
  ExitToApp,
} from "@material-ui/icons";
import { LangConstant, PathConstant, AppConstant } from "../../const";
import { Sidebar, Logout } from "../../components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import PropTypes from "prop-types";

const AdminLayout = (props) => {
  const { children, mainClass } = props;
  const { t: getLabel } = useTranslation();
  const classes = useStyles();
  const history = useHistory();

  const isBreakPoint = useMediaQuery(useTheme().breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [isBar, setIsBar] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);

  const onOpenSidebar = () => {
    setIsBar(!isBar);
  };

  const onLogout = () => {
    setIsOpenLogout(!isOpenLogout);
    Cookie.remove(AppConstant.KEY_TOKEN);
    Cookie.remove(AppConstant.KEY_ROLE);
    history.push(PathConstant.LOGIN_ADMIN);
    window.location.reload(true);
  };

  const listSidebar = [
    {
      text: getLabel(LangConstant.TXT_RESTAURANT_LIST),
      IconComponent: <Store />,
      isNewTab: false,
      path: PathConstant.ADMIN_RESTAURANT_LIST,
    },
    {
      text: getLabel(LangConstant.TXT_REGISTER_RESTAURANT),
      IconComponent: <AddCircle />,
      isNewTab: false,
      path: PathConstant.ADMIN_REGISTER_RESTAURANT,
    },
    {
      text: getLabel(LangConstant.TXT_PROFILE),
      IconComponent: <AccountBox />,
      isNewTab: false,
      path: PathConstant.ADMIN_PROFILE,
    },
    {
      text: getLabel(LangConstant.TXT_LOGOUT),
      IconComponent: <ExitToApp />,
      isNewTab: false,
    },
  ];

  return (
    <div>
      {!isBreakPoint && (
        <IconButton
          className={classes.IconButton}
          onClick={() => onOpenSidebar()}
        >
          {<Menu />}
        </IconButton>
      )}

      <main className={classes.main}>
        {isBreakPoint ? (
          <Sidebar
            listSidebar={listSidebar}
            children={children}
            setIsOpenLogout={setIsOpenLogout}
          />
        ) : (
          isBar && (
            <Sidebar
              listSidebar={listSidebar}
              children={children}
              isTop={true}
              setIsOpenLogout={setIsOpenLogout}
            />
          )
        )}
        <Logout
          isOpen={isOpenLogout}
          setIsOpen={setIsOpenLogout}
          onSubmit={onLogout}
        />
        <Box className={`${classes.container} ${mainClass}`}>{children}</Box>
      </main>
    </div>
  );
};

export const CONTAINER_SPACE = 10;

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    height: `calc(100vh - ${CONTAINER_SPACE}px)`,
    padding: 0,
  },
  container: {
    flexGrow: 1,
    height: "100%",
    margin: "0 10px",
    overflow: "auto",
  },
}));

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default memo(AdminLayout);
