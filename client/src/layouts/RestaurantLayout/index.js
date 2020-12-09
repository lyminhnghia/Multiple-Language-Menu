import React, { memo, useState } from "react";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  IconButton,
  Box,
} from "@material-ui/core";
import {
  CropFree,
  Store,
  Language,
  Menu,
  Create,
  AddCircle,
  FormatListBulleted,
  History,
  ExitToApp,
} from "@material-ui/icons";
import { LangConstant, PathConstant, AppConstant } from "../../const";
import { Sidebar, Logout } from "../../components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import PropTypes from "prop-types";

const RestaurantLayout = (props) => {
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
    history.push(PathConstant.LOGIN_RESTAURANT);
    window.location.reload(true);
  };

  const listSidebar = [
    {
      text: getLabel(LangConstant.TXT_QR_CODE),
      IconComponent: <CropFree />,
      isNewTab: false,
      path: PathConstant.RESTAURANT_QR_CODE,
    },
    {
      text: getLabel(LangConstant.TXT_RESTAURANT_INFORMATION),
      IconComponent: <Store />,
      isNewTab: false,
      path: PathConstant.RESTAURANT_INFORMATION,
    },
    {
      text: getLabel(LangConstant.TXT_CATEGORY_PRODUCT),
      IconComponent: <FormatListBulleted />,
      isNewTab: false,
      path: PathConstant.RESTAURANT_CATEGORY_TABLE,
    },
    {
      text: getLabel(LangConstant.TXT_CONTRACT_INFO),
      IconComponent: <Create />,
      isNewTab: false,
      path: PathConstant.RESTAURANT_CONTRACT,
    },
    {
      text: getLabel(LangConstant.TXT_ORDER_HISTORY),
      IconComponent: <History />,
      isNewTab: false,
      path: PathConstant.RESTAURANT_ORDER_HISTORY,
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
    margin: "0 auto",
    overflow: "auto",
  },
}));

RestaurantLayout.propTypes = {
  children: PropTypes.node,
};

export default memo(RestaurantLayout);
