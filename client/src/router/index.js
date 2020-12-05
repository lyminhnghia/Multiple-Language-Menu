import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { PathConstant } from "../const";
import {
  LoginAdminPage,
  RestaurantListAdmin,
  RestaurantRegisterAdmin,
  ProfileAdmin,
  AdminNotFound,
} from "../pages/Admin";
import NotFoundPage from "../pages/NotFound";
import {
  LoginRestaurant,
  RestaurantAddCategory,
  CategoryTable,
  TranferLanguage,
  ContractInformation,
  QRCodeRestaurant,
  RestaurantInformation,
  OrderHistoryRestaurant,
} from "../pages/Restaurant";

import { Introduce, Category,OrderHistory } from "../pages/Customer";

function AuthenticationRoute(props) {
  const { component: Component, ...rest } = props;
  // Check authentication with the page need to be protected
  const isCheckedAdmin = window.isCheckedAdmin;
  const isCheckedRestaurant = window.isCheckedRestaurant;

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

const Routes = () => {
  return (
    <Switch>
      {/* <Redirect exact from={PathConstant.ROOT} to={PathConstant.DASHBOARD} /> */}
      {/* <AuthenticationRoute component={DashboardPage} exact path={PathConstant.DASHBOARD} /> */}
      <Route component={LoginAdminPage} exact path={PathConstant.LOGIN_ADMIN} />
      <Route
        component={RestaurantListAdmin}
        exact
        path={PathConstant.ADMIN_RESTAURANT_LIST}
      />
      <Route
        component={RestaurantRegisterAdmin}
        exact
        path={PathConstant.ADMIN_REGISTER_RESTAURANT}
      />
      <Route component={ProfileAdmin} exact path={PathConstant.ADMIN_PROFILE} />
      <Route
        component={AdminNotFound}
        exact
        path={PathConstant.ADMIN_NOT_FOUND}
      />
      {/* <Redirect to={PathConstant.ADMIN_NOT_FOUND} /> */}

      <Route
        component={LoginRestaurant}
        exact
        path={PathConstant.LOGIN_RESTAURANT}
      />
      <Route
        component={RestaurantAddCategory}
        exact
        path={PathConstant.RESTAURANT_ADD_CATEGORY}
      />
      <Route
        component={CategoryTable}
        exact
        path={PathConstant.RESTAURANT_CATEGORY_TABLE}
      />
      <Route
        component={TranferLanguage}
        exact
        path={PathConstant.RESTAURANT_TRANFER_LANGUAGE}
      />
      <Route
        component={ContractInformation}
        exact
        path={PathConstant.RESTAURANT_CONTRACT}
      />
      <Route
        component={QRCodeRestaurant}
        exact
        path={PathConstant.RESTAURANT_QR_CODE}
      />
      <Route
        component={RestaurantInformation}
        exact
        path={PathConstant.RESTAURANT_INFORMATION}
      />
      <Route
        component={OrderHistoryRestaurant}
        exact
        path={PathConstant.RESTAURANT_ORDER_HISTORY}
      />

      {/* Customer */}
      <Route component={Category} exact path={PathConstant.CUSTOMER_CATEGORY} />

      <Route component={Introduce} exact path={PathConstant.ROOT} />
      <Route component={OrderHistory} exact path={PathConstant.CUSTOMER_ORDER_HISTORY} />
      <Route component={NotFoundPage} exact path={PathConstant.NOT_FOUND} />
      {/* <Redirect to={PathConstant.NOT_FOUND} /> */}
    </Switch>
  );
};

export default Routes;
