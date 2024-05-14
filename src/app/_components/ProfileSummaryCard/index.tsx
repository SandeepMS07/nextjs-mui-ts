"use client";
import { AppButton } from "@/components/AppButton";
import KenAvatar from "@/components/KenComponents/KenAvatar";
import { Box, Divider, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useStyles } from "../styles.module";
import ProfileDialogue from "../ProfileDailogue";
import { useState } from "react";

const ProfileSummaryCard: React.FunctionComponent = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tookSurvey, setTookSurvey] = useState(false);
  const handleProfileClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <Paper className={classes.profileSummaryContainer}>
        <Typography className={classes.profileSummaryTypo}>
          Profile Summary
        </Typography>
        <Divider />
        <Box className={classes.profileNameContainer}>
          <KenAvatar classes={classes.avatar} value={"Support Team"} />
          <Box>
            <Typography className={classes.profileNameTypo}>
              Aarav Patel
            </Typography>
            <Typography className={classes.profileYearTypo}>
              Global MBA-2025
            </Typography>
          </Box>
        </Box>
        <Box className={classes.profileNameContainer2}>
          <Typography className={classes.profileSummaryTypo2}>
            General
          </Typography>
          <Box className={classes.profileNameContainer2Sub}>
            <Typography className={classes.profileSummaryTypo2}>
              Nationality:{" "}
              <span className={classes.profileSummaryTypo2Span}>Indian</span>
            </Typography>
            <Typography className={classes.profileSummaryTypo2}>
              DOB:{" "}
              <span className={classes.profileSummaryTypo2Span}>
                05th May, 2000
              </span>
            </Typography>
            <Typography className={classes.profileSummaryTypo2}>
              Marital status:{" "}
              <span className={classes.profileSummaryTypo2Span}>Single</span>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.profileNameContainer2}>
          <Typography className={classes.profileSummaryTypo2}>
            Admission test score
          </Typography>
          <Box className={classes.profileNameContainer2Sub}>
            <Typography className={classes.profileSummaryTypo2}>
              Test type:{" "}
              <span className={classes.profileSummaryTypo2Span}>GRE</span>
            </Typography>
            <Typography className={classes.profileSummaryTypo2}>
              Score:{" "}
              <span className={classes.profileSummaryTypo2Span}>90/100</span>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.profileNameContainer2}>
          <Typography className={classes.profileSummaryTypo2}>
            Contact
          </Typography>
          <Box className={classes.profileNameContainer2Sub2}>
            <Typography className={classes.profileSummaryTypo2}>
              Phone:{" "}
              <span className={classes.profileSummaryTypo2Span}>
                +91 8169432694
              </span>
            </Typography>
            <Typography className={classes.profileSummaryTypo2}>
              Email:{" "}
              <span className={classes.profileSummaryTypo2Span}>
                aaravpatel@gmail.com
              </span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <AppButton
            type="submit"
            size="medium"
            variant="contained"
            className={classes.profileBtn}
            endIcon={<ArrowForwardIcon />}
            onClick={handleProfileClick}
          >
            View Full profile
          </AppButton>
        </Box>
      </Paper>
      <ProfileDialogue
        open={dialogOpen}
        onClose={handleCloseDialog}
        setTookSurvey={setTookSurvey}
      />
    </>
  );
};

export default ProfileSummaryCard;
