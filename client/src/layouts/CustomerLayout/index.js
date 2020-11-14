import React, { memo, useState } from "react";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  IconButton,
  Box,
} from "@material-ui/core";
import {
  Menu,
} from "@material-ui/icons";
import { LangConstant, PathConstant } from "../../const";
import TranslateIcon from '@material-ui/icons/Translate';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Sidebar } from "../../components";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const CustomerLayout = (props) => {
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
  return (
    <div>
      {!isBreakPoint && (
        <Box className={classes.boxHeader}>
            <IconButton
                className={classes.IconButton}
                onClick={() => onOpenSidebar()}
                >
                {<TranslateIcon />}
            </IconButton>
            <Box className={classes.boxContent}>
                {element.menuuu}
            </Box>
            <IconButton
                className={classes.IconButton}
                onClick={() => onOpenSidebar()}
                >
                {<ShoppingCartIcon />}
            </IconButton>
        </Box>
        
      )}

      <main className={classes.main}>
        {/* {isBreakPoint ? (
          <Sidebar listSidebar={listSidebar} children={children} />
        ) : (
          isBar && (
            <Sidebar
              listSidebar={listSidebar}
              children={children}
              isTop={true}
            />
          )
        )} */}

        <Box className={`${classes.container} ${mainClass}`}>{children}</Box>
      </main>
    </div>
  );
};

export const CONTAINER_SPACE = 10;
const element = {
    menuuu: "Thực đơn",
}
const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        height: `calc(100vh - ${CONTAINER_SPACE}px)`,
        padding: 0,
    },
    container: {
        flexGrow: 1,
        width: "100%",
        // height: "100%",
        // margin: "0 auto",
        // overflow: "auto",
    },
    boxHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    boxContent: {
        fontSize: "18px",
        lineHeight: "48px",
        fontWeight: "500"
    }
}));

CustomerLayout.propTypes = {
  children: PropTypes.node,
};

export default memo(CustomerLayout);
