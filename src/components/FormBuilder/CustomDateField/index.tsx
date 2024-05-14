"use client";
import { FormJsonFields, ValuesOfAny } from "@/interfaces/Common";
import { useStyles } from "../styles.module";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import { InputAdornment } from "@mui/material";
import KenInput from "@/components/KenComponents/KenInput";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const CustomDateField: React.FunctionComponent<{ fields: FormJsonFields }> = (
  props
) => {
  const { fields } = props;
  const classes = useStyles();
  const { register, control } = useFormContext();

  const [fieldTypeSwitcher, setFieldTypeSwitcher] = useState<ValuesOfAny>();

  const handleInputFieldSwitcher = (name: string, value: boolean) => {
    setFieldTypeSwitcher({ ...fieldTypeSwitcher, [name]: value });
  };

  
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div style={{ ...fields.fieldStyle }}>
            {fieldTypeSwitcher && fieldTypeSwitcher[`${fields.name}`] ? (
              <KenInput
                border
                customMargin
                placeholder={fields.placeholder}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChange(e);
                }}
                onBlur={() => {
                  handleInputFieldSwitcher(`${fields.name}`, false);
                }}
                error={error?.message}
                disableKeyDown
                labelClassName={classes.inputLableCustom}
                {...fields}
                type={"date"}
              />
            ) : (
              <KenInput
                border
                customMargin
                placeholder={fields.placeholder}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onChange(e);
                }}
                onFocus={() => {
                  handleInputFieldSwitcher(`${fields.name}`, true);
                }}
                error={error?.message}
                disableKeyDown
                labelClassName={classes.inputLableCustom}
                {...fields}
                InputProps={{
                  className: classes.inputStyles,
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarTodayIcon style={{ height: "14px" }} />
                    </InputAdornment>
                  ),
                }}
                type={"text"}
              />
            )}
          </div>
        );
      }}
      {...register(`${fields.name}`, { ...fields?.validation })}
    />
  );
};

export default CustomDateField;
