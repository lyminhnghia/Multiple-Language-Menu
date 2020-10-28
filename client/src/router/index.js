import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { PathConstant } from "../const";
import PropTypes from "prop-types";
import {
  LoginAdminPage,
  ShopListAdmin,
  ShopRegisterAdmin,
  ProfileAdmin,
  AdminNotFound,
} from "../pages/Admin";
import DashboardPage from "../pages/Dashboard";
import NotFoundPage from "../pages/NotFound";
import {
  LoginShop,
  ShopAddCategory,
  CategoryTable,
  TranferLanguage,
  ContractInformation,
  QRCodeShop,
} from "../pages/Shop";
function AuthenticationRoute(props) {
  const { component: Component, ...rest } = props;
  // Check authentication with the page need to be protected
  const isCheckedAdmin = window.isCheckedAdmin;
  const isCheckedShop = window.isCheckedShop;

  return isCheckedAdmin ? (
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
      <Route
        component={ShopListAdmin}
        exact
        path={PathConstant.ADMIN_SHOP_LIST}
      />
      <Route component={LoginAdminPage} exact path={PathConstant.LOGIN_ADMIN} />
      <Route
        component={ShopRegisterAdmin}
        exact
        path={PathConstant.ADMIN_REGISTER_SHOP}
      />
      <Route component={ProfileAdmin} exact path={PathConstant.ADMIN_PROFILE} />
      <Route
        component={AdminNotFound}
        exact
        path={PathConstant.ADMIN_NOT_FOUND}
      />
      {/* <Redirect to={PathConstant.ADMIN_NOT_FOUND} /> */}

      <Route component={LoginShop} exact path={PathConstant.LOGIN_SHOP} />
      <Route
        component={ShopAddCategory}
        exact
        path={PathConstant.SHOP_ADD_CATEGORY}
      />
      <Route
        component={CategoryTable}
        exact
        path={PathConstant.SHOP_CATEGORY_TABLE}
      />
      <Route
        component={TranferLanguage}
        exact
        path={PathConstant.SHOP_TRANFER_LANGUAGE}
      />
      <Route
        component={ContractInformation}
        exact
        path={PathConstant.SHOP_CONTRACT}
      />
      <Route component={QRCodeShop} exact path={PathConstant.SHOP_QR_CODE} />
      <Route component={NotFoundPage} exact path={PathConstant.NOT_FOUND} />
      <Redirect to={PathConstant.NOT_FOUND} />
    </Switch>
  );
};

export default Routes;
