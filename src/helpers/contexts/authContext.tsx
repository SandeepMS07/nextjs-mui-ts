"use client";

import React, { useEffect, useReducer, createContext, Dispatch } from "react";
import { AuthAction, AuthState } from "@/interfaces/Contexts";
import { ReactChildren } from "@/interfaces/Common";
import { KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN } from "../constant";

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  search: null,
};

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      const userPayload = action.payload || { user: null };
      localStorage.setItem(
        KEY_REFRESH_TOKEN,
        userPayload.user?.refreshToken?.token ?? ""
      );
      localStorage.setItem(
        KEY_ACCESS_TOKEN,
        userPayload.user?.accessToken?.token ?? ""
      );
      localStorage.setItem("user", JSON.stringify(userPayload.user));
      return {
        ...state,
        isAuthenticated:
          userPayload.user && userPayload.user === null ? false : true,
        user: userPayload.user || null,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        search: null,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}>({ state: initialState, dispatch: () => {} });

export const AuthContextProvider: React.FunctionComponent<ReactChildren> = (
  props
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = JSON?.parse(localStorage?.getItem("user") ?? "null");
    if (user) {
      dispatch({
        type: "LOGIN",
        payload: {
          user,
        },
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
