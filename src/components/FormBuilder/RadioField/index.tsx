"use client";

import KenRadioGroup from "@/components/KenComponents/KenRadioGroup";
import { useAppFormContext } from "@/helpers/contexts/formContext";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Controller, useFormContext } from "react-hook-form";

const useStyles = makeStyles((theme: Theme) => ({
  inputLableCustom: {
    color: `${theme.palette.KenColors.ClientBlack2} !important`,
    fontSize: "16px !important",
    fontWeight: "500 !important",
    margin: "6px 0px !important",
    textAlign:"start",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px !important",
    },
  },
  
}));

const RadioField: React.FunctionComponent<{ fields: any }> = (props) => {
  const classes = useStyles();
  const { fields } = props;
  const { control, register } = useFormContext();
  const {
    state: { options },
    dispatch,
  } = useAppFormContext();

  const YesOrNoOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const Options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];
  const RadioComponent: React.FunctionComponent = () => {
    switch (fields.type) {
      case "yesOrNo":
        return (
          <div style={{ ...fields.fieldStyle }}>
            <Controller
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <KenRadioGroup
                    onChange={onChange}
                    label={fields.label}
                    options={YesOrNoOptions}
                    error={error?.message}
                    labelClassName={classes.inputLableCustom}
                    labelPlacement="end"
                  />
                );
              }}
              {...register(`${fields.name}`, { ...fields?.validation })}
            />
          </div>
        );
      case "radio":
        return (
          <div style={{ ...fields.fieldStyle }}>
            <Controller
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <KenRadioGroup
                    onChange={onChange}
                    label={fields.label}
                    options={Options}
                    error={error?.message}
                    labelClassName={classes.inputLableCustom}
                    labelPlacement="bottom"
                  />
                );
              }}
              {...register(`${fields.name}`, { ...fields?.validation })}
            />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <RadioComponent />
    </>
  );
};

export default RadioField;
