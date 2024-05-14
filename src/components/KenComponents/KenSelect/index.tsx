import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import KenIcon from "../KenIcon";
import KenTextLabel from "../KenTextLabel";
import KenTextField from "../KenTextField";

const useStyles = makeStyles((theme: Theme) => {
  return {
    textLabel: {
      fontSize: "16px !important",
      fontWeight: "400",
      color: "#8C8E94 !important",
      opacity: "0.9",
      padding: "6px 0px 0px 0px !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
    customIcon: {
      "user-select": "none",
      height: "1em",
      display: "inline-block",
      "-webkit-flex-shrink": "0",
      "-ms-flex-negative": "0",
      "flex-shrink": "0",
      "-webkit-transition": "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      "font-size": "1.5rem",
      position: "absolute",
      right: "20px",
      top: "calc(50% - 0.5em)",
      "pointer-events": "none",
      color: "rgba(0, 0, 0, 0.54)",
    },
  };
});

export function CustomIcon(props: any) {
  const classes = useStyles();

  return (
    <svg
      className={`${classes.customIcon} ${props.className}`}
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="#73706E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default function KenSelect(props: any) {
  const {
    label,
    required,
    optionalLabel,
    errorMessage,
    selectLabel,
    error,
    options,
    handleChange,
    value,
    textFieldProps,
    labelClassName,
    helperText,
    ui,
    ...otherProps
  } = props;
  const classes = useStyles();

  return (
    <>
      {label && (
        <KenTextLabel
          label={label}
          required={required}
          optionalLabel={optionalLabel}
          labelClassName={labelClassName}
          helperText={helperText}
        />
      )}
      <Box display="flex" gap={"10px"} alignItems="center">
        <FormControl fullWidth>
          {value === undefined && (
            <InputLabel className={classes.textLabel}>{selectLabel}</InputLabel>
          )}
          <KenTextField
            id="outlined-select-currency"
            select
            value={value}
            onChange={handleChange}
            error={error}
            {...otherProps}
            {...textFieldProps}
          >
            {options?.map((option: any, index: number) => {
              return (
                <MenuItem
                  disabled={option?.disabled || false}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    padding: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                    overflowX: "hidden",
                  }}
                  key={index}
                  value={option?.value}
                >
                  <Box
                    display="flex"
                    sx={{ fontSize: { xs: "12px", sm: "13px", md: "14px" } }}
                  >
                    {option?.icon && <Box mr={1}>{option.icon}</Box>}
                    <Box>{option?.label}</Box>
                  </Box>
                </MenuItem>
              );
            })}
          </KenTextField>
        </FormControl>
        {error && errorMessage && (
          <Box>
            <KenIcon
              icon={
                "https://inazstgpfs3001.blob.core.windows.net/assets/Kenverse/Alumni/Images/error.png"
              }
              iconType="img"
              variant="extraSmall"
            />
          </Box>
        )}
      </Box>
      {error && errorMessage && (
        <Typography
          textAlign={"start"}
          color={"#FC2C32"}
          fontSize={"14px"}
          fontWeight={"500"}
        >
          {error}
        </Typography>
      )}
      {ui && ui?.divider && (
        <Box mt={3} mb={6}>
          <Divider />
        </Box>
      )}
    </>
  );
}
