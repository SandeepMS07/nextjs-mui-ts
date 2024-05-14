"use client"

import { ReactChildren } from "@/interfaces/Common";
import { AppAction, AppState } from "@/interfaces/Contexts";
import React, { createContext, useReducer, useContext, Dispatch } from "react";

const AppContext = createContext<{ state: AppState; dispatch: Dispatch<AppAction> }>({
  state: { config: { apiBaseUrl: "", logoURL: "", tokenUrl: "", url: "" }, logo: "" },
  dispatch: () => {},
});

const reducer = function (state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "updateConfig":
      return {
        ...state,
        config: { ...(state?.config || {}), ...((typeof action.value === "object" ? action.value : {}) || {}) },
      };
    case "udpateLoading":
      return {
        ...state,
        isLoading: (typeof action.value === "boolean" ? action.value : !state.isLoading) || !state.isLoading,
      };
    case "updateLogo":
      return { ...state, logo: typeof action.value === "string" ? action.value : "" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const AppContextProvider: React.FunctionComponent<ReactChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    config: { apiBaseUrl: "", logoURL: "", tokenUrl: "", url: "" },
    logo: "",
  });
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): {
  state: AppState;
  dispatch: Dispatch<AppAction>;
} => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext within provider");
  }
  return context;
};

export default AppContext;
