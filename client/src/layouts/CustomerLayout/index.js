import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@material-ui/core";
import { Menu, ShoppingCart } from "@material-ui/icons";
import { SideBar } from "./components";

const CustomerLayout = ({ mainClass, children }) => {
  const classes = useStyles();
  const isBreakPoint = useMediaQuery(useTheme().breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [isBar, setIsBar] = useState(false);
  const onOpenSidebar = () => {
    setIsBar(!isBar);
  };

  return (
    <>
      <main className={classes.main}>
        <SideBar />
        <Box className={`${classes.container} ${mainClass}`}>
          {!isBreakPoint && (
            <Box className={classes.boxHeader}>
              <IconButton
                className={classes.IconButton}
                onClick={() => onOpenSidebar()}
              >
                {<Menu />}
              </IconButton>
              <Box className={classes.boxContent}>menuuu</Box>
              <IconButton
                className={classes.IconButton}
                // onClick={() => onOpenSidebar()}
              >
                {<ShoppingCart />}
              </IconButton>
            </Box>
          )}
          {children}
        </Box>
      </main>
    </>
  );
};

CustomerLayout.propTypes = {
  children: PropTypes.node,
  mainClass: PropTypes.string,
};

CustomerLayout.defaultProps = {};

export const CONTAINER_SPACE = 10;

const useStyles = makeStyles((theme) => ({
  main: {
    height: `calc(100vh - ${CONTAINER_SPACE}px)`,
    padding: 0,
    display: "flex",
  },
  container: {
    flexGrow: 1,
    height: "100%",
    margin: "0 10px",
    overflow: "auto",
  },
  boxHeader: {
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  boxContent: {
    fontSize: "18px",
    lineHeight: "48px",
    fontWeight: "500",
  },
}));

export default memo(CustomerLayout);
