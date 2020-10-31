import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import * as AuthRedux from "./auth.redux";
import * as AdminRedux from "./admin.redux";
import * as CategoryShopRedux from "./categoryShop.redux";
import * as ShopInfoRedux from "./shopInfo.redux";
import * as ItemShopRedux from "./itemShop.redux";
import * as LanguageShopRedux from "./languageShop.redux";

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  authRedux: AuthRedux.reducer,
  adminRedux: AdminRedux.reducer,
  categoryShopRedux: CategoryShopRedux.reducer,
  shopInfoRedux: ShopInfoRedux.reducer,
  itemShopRedux: ItemShopRedux.reducer,
  languageShopRedux: LanguageShopRedux.reducer,
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
