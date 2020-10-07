import React, {memo} from "react";
import { makeStyles, AppBar, Toolbar, Container, Typography } from "@material-ui/core"
import { LangConstant } from "../../const"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types";

const AdminLayout = props => {
  const { children } = props;
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
  <AppBar style={{backgroundColor: "#ffffff", boxShadow: "none", borderBottom: "1px solid #cfd8dc", height: 50}}>
    <Toolbar>
      <Container maxWidth="md" className={classes.navbarDisplayFlex}>
        <Typography color="primary">
          {getLabel(LangConstant.TXT_SHOP_LIST)}
        </Typography>
      </Container>
    </Toolbar>
  </AppBar>)
};

const useStyles = makeStyles(theme => ({
  navbarDisplayFlex: {
    display: `flex`,
    
  },
}));

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default memo(AdminLayout);
