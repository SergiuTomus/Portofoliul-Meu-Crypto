import { createStore, applyMiddleware } from "redux";
import createRootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();
const initialState = {};

const store = createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

export default store;
