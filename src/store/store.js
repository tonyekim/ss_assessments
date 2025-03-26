import { createStore, combineReducers, compose } from "redux";
import sidebarReducer from "./sidebarSlice";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

const composeEnhancers =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const store = createStore(rootReducer, composeEnhancers());

