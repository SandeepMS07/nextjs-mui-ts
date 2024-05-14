import { Box, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KenTextLabel from "../KenTextLabel";
import KenIcon from "../KenIcon";
import DoneIcon from "@mui/icons-material/Done";
import KenTextField from "../KenTextField";

const useStyles = makeStyles({
  errorStyles: {
    backgroundColor: "#ffffff",
  },
  successMessage: {
    fontSize: "14px",
    fontWeight: "500 !important",
    color: "#158467",
  },
});

const KenInput = (props: any) => {
  const {
    label,
    required,
    optionalLabel,
    error,
    errorMessage,
    ui,
    success,
    disableKeyDown,
    hideLabel = false,
    helperText,
    minDate,
    disabled,
    ...otherProps
  } = props;
  const classes = useStyles();
  return (
    <>
      <Box width="100%">
        {!hideLabel && (
          <KenTextLabel
            label={label}
            required={required}
            optionalLabel={optionalLabel}
            labelClassName={props.labelClassName}
            helperText={helperText}
          />
        )}

        <Box display="flex" gap={"8px"} alignItems="center">
          <KenTextField
            disableKeyDown={disableKeyDown}
            error={error}
            disabled={disabled}
            minDate={minDate}
            {...otherProps}
            label=""
          />
          {error && errorMessage && (
            <Box>
              <KenIcon
                iconType="img"
                icon={
                  "https://inazstgpfs3001.blob.core.windows.net/assets/Kenverse/Alumni/Images/error.png"
                }
                variant="extraSmall"
              />
            </Box>
          )}
        </Box>
        {error && errorMessage && (
          <Typography
            textAlign={"start"}
            color={"#FC2C32"}
            fontWeight={"500"}
            fontSize={"14px"}
          >
            {error}
          </Typography>
        )}
        {success && (
          <Box display="flex" alignItems="flex-start" pt={1}>
            <Typography component="span">
              {success.icon || (
                <DoneIcon fontSize="small" style={{ color: "#158467" }} />
              )}
            </Typography>
            <Typography
              component="span"
              className={classes.successMessage}
              pl={1}
            >
              {success.message}
            </Typography>
          </Box>
        )}
      </Box>
      {ui && ui?.divider && (
        <Box mt={2} mb={2}>
          <Divider />
        </Box>
      )}
    </>
  );
};

export default KenInput;
