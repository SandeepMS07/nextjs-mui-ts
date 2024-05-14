import { Box, Divider, Typography } from "@mui/material";
import { useStyles } from "../styles.modules";
import { AppButton } from "@/components/AppButton";

const ProfileDocument = () => {
  const classes = useStyles();
  return (
    <Box className={`${classes.SummaryContainer} scrollbar-cus`}>
      <Box className={classes.DocumentSubContainer}>
        <Typography className={classes.SubSummaryContainerTypo}>
          12th Std Mark sheet
        </Typography>
        <AppButton
          type="submit"
          size="medium"
          className={classes.DocumentBtn}
        >
          View
        </AppButton>
      </Box>
      <Divider />
    </Box>
  );
};

export default ProfileDocument;
