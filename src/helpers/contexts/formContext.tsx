"use client";
import { ReactChildren } from "@/interfaces/Common";
import { FormAction, FormState } from "@/interfaces/Contexts";
import { Dispatch, createContext, useContext, useReducer } from "react";

const FormContext = createContext<{
  state: FormState;
  dispatch: Dispatch<FormAction>;
}>({
  state: { options: {}, files: {}, multiText: {} },
  dispatch: () => {},
});

const reducer = function (state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "updateOptions":
      return {
        ...state,
        options: {
          ...state.options,
          [action.value.fieldName]: action.value.selectOptions,
        },
      };
    case "updateFiles":
      return {
        ...state,
        files: {
          ...state.files,
          [action.value.fieldName]: action.value.fileData,
        },
      };
    case "removeFiles":
      const getFiles = { ...state.files };
      delete getFiles[action.value.fieldName];
      return { ...state, files: { ...getFiles } };
    case "updateMultiText":
      const newSkill = action.value.multiData.trim().toLowerCase();
      if (
        newSkill &&
        !(state.multiText[action.value.fieldName] || []).includes(newSkill)
      ) {
        const uniqueArray = Array.from(
          new Set([
            ...(state.multiText[action.value.fieldName] || []).map(
              (item: string) => item.toLowerCase()
            ),
            newSkill,
          ])
        );
        return {
          ...state,
          multiText: {
            ...state.multiText,
            [action.value.fieldName]: uniqueArray,
          },
        };
      }
      return {
        ...state,
        multiText: {
          [action.value.fieldName]: state.multiText[action.value.fieldName],
        },
      };
    case "deleteMultiText":
      const newArray = state.multiText[`${action.value.fieldName}`]
        ? [...state.multiText[`${action.value.fieldName}`]]
        : [];
      newArray.splice(action.value.fieldIndex, 1);
      return {
        ...state,
        multiText: { ...state.multiText, [action.value.fieldName]: newArray },
      };
    case "removeMultiText":
      const getSkills = { ...state.multiText };
      delete getSkills[action.value.fieldName];
      return { ...state, multiText: { ...getSkills } };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const FormContextProvider: React.FunctionComponent<ReactChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    options: {},
    files: {},
    multiText: {},
  });
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useAppFormContext = (): {
  state: FormState;
  dispatch: Dispatch<FormAction>;
} => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useAppFormContext within provider");
  }
  return context;
};

export default FormContext;
