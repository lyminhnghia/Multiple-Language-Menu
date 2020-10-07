import React, {memo} from "react";
import { makeStyles } from "@material-ui/core"
import { AdminLayout } from "../../../layouts"
import PropTypes from "prop-types";

const ShopList = props => {
  const classes = useStyles();

  return (
  <AdminLayout>
    nghia
  </AdminLayout>
  )
};

const useStyles = makeStyles(theme => ({
  
}));

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default memo(AdminLayout);
