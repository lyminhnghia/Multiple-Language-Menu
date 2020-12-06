import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import * as AuthRedux from "./auth.redux";
import * as AdminRedux from "./admin.redux";
import * as CategoryRestaurantRedux from "./categoryRestaurant.redux";
import * as RestaurantInfoRedux from "./restaurantInfo.redux";
import * as ItemRestaurantRedux from "./itemRestaurant.redux";
import * as LanguageRestaurantRedux from "./languageRestaurant.redux";
import * as ImageRedux from "./image.redux";

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  authRedux: AuthRedux.reducer,
  adminRedux: AdminRedux.reducer,
  categoryRestaurantRedux: CategoryRestaurantRedux.reducer,
  restaurantInfoRedux: RestaurantInfoRedux.reducer,
  itemRestaurantRedux: ItemRestaurantRedux.reducer,
  languageRestaurantRedux: LanguageRestaurantRedux.reducer,
  imageRedux: ImageRedux.reducer,
});

export const rootReducer = (state, action) => {
  // Action logout
  // if (action.type === KeyConstant.LOGOUT_REQUEST) {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

/* ------------- Redux Configuration ------------- */

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();

// Create store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// kick off root saga
sagaMiddleware.run(rootSaga);

export default store;
