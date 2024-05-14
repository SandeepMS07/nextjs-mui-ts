"use client";
import { Grid, Paper } from "@mui/material";
import ProfileSummaryCard from "../_components/ProfileSummaryCard";
import StepperScoresheet from "../_components/StepperScoresheet";
import { useStyles } from "../style.module";

const ScoreSheet: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      spacing={3}
      xs={12}
      lg={12}
      sx={{ overflowY: "auto", overflowX: {xs:"auto",md:"hidden"}, height: "100%" }}
      className="scrollbar-hide"
    >
      <Grid item xs={12} md={7} lg={9} height={"100%"}>
        <Paper className={classes.screensheetContainer}>
          <StepperScoresheet />
        </Paper>
      </Grid>
      <Grid item xs={12} md={5} lg={3}>
        <ProfileSummaryCard />
      </Grid>
    </Grid>
  );
};

export default ScoreSheet;
