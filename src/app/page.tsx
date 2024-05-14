"use client";
import KenSelect from "@/components/KenComponents/KenSelect";
import KenTabs from "@/components/KenComponents/KenTabs";
import { Box, Paper } from "@mui/material";
import InterviewCompleted from "./_components/InterviewCompleted";
import InterviewProcess from "./_components/InterviewProcess";
import InterViewSchedule from "./_components/InterviewSchedule";
import { useStyles } from "./style.module";

export default function Home() {
  const classes = useStyles();
  const tabs = [
    { label: "Interview schedule", content: <InterViewSchedule /> },
    { label: "Interview completed", content: <InterviewCompleted /> },
    { label: "Interview process", content: <InterviewProcess /> },
  ];

  return (
  <>
    <Paper className={classes.interViewContainer}>
      <KenTabs tabs={tabs} />
      <Box sx={{ position: "absolute", top: "0", right: "10px" }}>
        <KenSelect
          selectLabel="All"
          border
          customMargin
          InputProps={{ className: classes.inputStyles }}
          options={["All", "Option 2"]}
        />
      </Box>
    </Paper>
  </>
  );
}
