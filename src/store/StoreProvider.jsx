"use client"
import { store, persistor } from "./store";
import { Provider } from "react-redux";


export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
