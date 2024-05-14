import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Grid, Theme, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface KenTextLabelProps {
  label?: string;
  required?: boolean;
  optionalLabel?: string;
  helperText?: string;
  labelClassName?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    fontSize: "12px",
    lineHeight: "16px",
    color: "#505F79 !important",
    fontWeight: 500,
    marginBottom: 6,
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
  asterisk: {
    color: "red",
  },
  optional: {},
}));
export default function KenTextLabel(props: KenTextLabelProps) {
  const classes = useStyles();
  const { label, required, optionalLabel, helperText } = props;

  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Typography
          className={`${classes.label} ${
            props.labelClassName ? props.labelClassName : ""
          }`}
        >
          {label}
          {required ? <span className={classes.asterisk}>*</span> : ""}
          {helperText && (
            <span>
              <Tooltip title={helperText}>
                <HelpOutlineIcon
                  sx={{
                    height: "12px",
                    width: "12px",
                    marginLeft: "5px",
                    marginBottom: "-2px",
                  }}
                />
              </Tooltip>
            </span>
          )}
        </Typography>
      </Grid>
      {props.optionalLabel && (
        <Grid item>
          <Typography className={classes.optional} variant="subtitle1">
            {!required && optionalLabel ? "" : " "}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
