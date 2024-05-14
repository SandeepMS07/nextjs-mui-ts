"use client";
import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import KenTextLabel from "../KenTextLabel";

interface Option {
  value: string;
  label: string;
}

interface KenRadioGroupProps {
  onChange: any;
  label: string;
  row?: boolean;
  options: Option[];
  required?: boolean;
  optionalLabel?: string;
  error?: string;
  className?: string;
  radioSx?: React.CSSProperties;
  labelClassName?: string;
  labelPlacement?: any;
  otherProps?: any;
}

const useStyles = makeStyles({
  errorStyles: {
    border: "1px solid red",
    padding: "8px",
    borderRadius: "4px",
  },
});

const KenRadioGroup: React.FC<KenRadioGroupProps> = (props) => {
  const {
    label,
    row = true,
    options,
    required,
    optionalLabel,
    error,
    className,
    radioSx,
    labelClassName,
    labelPlacement,
    ...otherProps
  } = props;
  const classes = useStyles();

  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <KenTextLabel
        label={label}
        required={required}
        optionalLabel={optionalLabel}
        labelClassName={labelClassName}
      />
      <RadioGroup
        row={row}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        {...otherProps}
        className={error ? classes.errorStyles : className}
      >
        {options?.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: { xs: 12, sm: 14, md: 16 },
                  },
                }}
              />
            }
            label={option.label}
            value={option.value}
            labelPlacement={labelPlacement}
            sx={{ fontSize: { xs: "10x", sm: "12px", md: "14px", lg: "16px" } }}
          />
        ))}
      </RadioGroup>
      {error && (
        <Typography variant="subtitle1" style={{ color: "red" }} align="left">
          {error}
        </Typography>
      )}
    </FormControl>
  );
};

export default KenRadioGroup;
