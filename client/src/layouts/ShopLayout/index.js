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
import { LangConstant, PathConstant } from "../../const";
import { Sidebar } from "../../components";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ShopLayout = (props) => {
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
      text: getLabel(LangConstant.TXT_QR_CODE),
      IconComponent: <CropFree />,
      isNewTab: false,
      path: PathConstant.SHOP_QR_CODE,
    },
    {
      text: getLabel(LangConstant.TXT_SHOP_INFORMATION),
      IconComponent: <Store />,
      isNewTab: false,
      path: PathConstant.SHOP_INFORMATION,
    },
    {
      text: getLabel(LangConstant.TXT_SORT_LANGUAGE),
      IconComponent: <Language />,
      isNewTab: false,
      path: PathConstant.SHOP_TRANFER_LANGUAGE,
    },
    {
      text: getLabel(LangConstant.TXT_ADD_CATEGORY),
      IconComponent: <AddCircle />,
      isNewTab: false,
      path: PathConstant.SHOP_ADD_CATEGORY,
    },
    {
      text: getLabel(LangConstant.TXT_CATEGORY_PRODUCT),
      IconComponent: <FormatListBulleted />,
      isNewTab: false,
      path: PathConstant.SHOP_CATEGORY_TABLE,
    },
    {
      text: getLabel(LangConstant.TXT_CONTRACT_INFO),
      IconComponent: <Create />,
      isNewTab: false,
      path: PathConstant.SHOP_CONTRACT,
    },
    {
      text: getLabel(LangConstant.TXT_ORDER_HISTORY),
      IconComponent: <History />,
      isNewTab: false,
      path: PathConstant.SHOP_ORDER_HISTORY,
    },
    {
      text: getLabel(LangConstant.TXT_LOGOUT),
      IconComponent: <ExitToApp />,
      isNewTab: false,
      path: PathConstant.LOGIN_SHOP,
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

ShopLayout.propTypes = {
  children: PropTypes.node,
};

export default memo(ShopLayout);
