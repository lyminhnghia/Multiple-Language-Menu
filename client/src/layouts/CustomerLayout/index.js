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

  const [isSidebar, setIsSidebar] = useState(false);

  const onOpenSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <main className={classes.main}>
        <SideBar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        <Box
          className={`${
            isSidebar ? classes.containerOpen : classes.containerClose
          } ${mainClass}`}
        >
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

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    padding: 0,
    display: "flex",
  },
  containerClose: {
    flexGrow: 1,
    height: "100%",
    margin: "0 10px",
    minWidth: 290,
  },
  containerOpen: {
    flexGrow: 1,
    height: "100%",
    margin: "0 10px 0 200px",
    minWidth: 290,
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
