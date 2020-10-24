import React, { memo, useState } from "react";
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
import { LangConstant, PathConstant } from "../../const";
import { Sidebar } from "../../components";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const AdminLayout = (props) => {
  const { children, mainClass } = props;
  const { t: getLabel } = useTranslation();
  const classes = useStyles();
  const isBreakPoint = useMediaQuery(useTheme().breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [isBar, setIsBar] = useState(false);
  const onOpenSidebar = () => {
    setIsBar(!isBar);
  };
  const listSidebar = [
    {
      text: getLabel(LangConstant.TXT_SHOP_LIST),
      IconComponent: <Store />,
      isNewTab: false,
      path: PathConstant.ADMIN_SHOP_LIST,
    },
    {
      text: getLabel(LangConstant.TXT_REGISTER_SHOP),
      IconComponent: <AddCircle />,
      isNewTab: false,
      path: PathConstant.ADMIN_REGISTER_SHOP,
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
      path: PathConstant.LOGIN_ADMIN,
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
          <Sidebar listSidebar={listSidebar} children={children} />
        ) : (
          isBar && (
            <Sidebar
              listSidebar={listSidebar}
              children={children}
              isTop={true}
            />
          )
        )}

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
