import React from "react";
import PropTypes from "prop-types";

const MainLayout = props => {
  const { children } = props;

  return <main>{children}</main>;
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
