import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { PathConstant } from "../const";
import PropTypes from "prop-types";
import ShopList from "../pages/Admin/ShopList";
import DashboardPage from "../pages/Dashboard";
import LoginAdminPage from "../pages/Admin/Login";
import NotFoundPage from "../pages/NotFound";

function AuthenticationRoute(props) {
  const { component: Component, ...rest } = props;
  // Check authentication with the page need to be protected
  const isChecked = window.isChecked;

  return isChecked ? (
    <Route {...rest} render={(matchProps) => <Component {...matchProps} />} />
  ) : (
    <Redirect
      to={{
        pathname: PathConstant.LOGIN_ADMIN,
        state: {
          from: rest.path,
        },
      }}
    />
  );
}

AuthenticationRoute.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

const Routes = () => {
  return (
    <Switch>
      {/* <Redirect exact from={PathConstant.ROOT} to={PathConstant.DASHBOARD} /> */}
      {/* <AuthenticationRoute component={DashboardPage} exact path={PathConstant.DASHBOARD} /> */}
      <Route component={ShopList} exact path={PathConstant.ADMIN_SHOP_LIST} />
      <Route component={LoginAdminPage} exact path={PathConstant.LOGIN_ADMIN} />
      <Route component={NotFoundPage} exact path={PathConstant.NOT_FOUND} />
      <Redirect to={PathConstant.NOT_FOUND} />
    </Switch>
  );
};

export default Routes;
