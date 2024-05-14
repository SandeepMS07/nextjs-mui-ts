import { Box, Divider, Typography } from "@mui/material";
import { useStyles } from "../styles.modules";

const ProfileSummary = () => {
  const classes = useStyles();

  const renderDetailItem = (label: string, value: string) => (
    <Box className={classes.summaryHeadingSubContainer}>
      <Typography className={classes.summaryHeadingTypo}>{label}</Typography>
      <div className={`${classes.summaryTypo2} scrollbar-cus`}>{value}</div>
    </Box>
  );

  return (
    <Box className={`${classes.SummaryContainer} scrollbar-cus`}>
      <Box className={classes.SubSummaryContainer}>
        <Typography className={classes.SubSummaryContainerTypo}>
          Course Details
        </Typography>
        <Divider />
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap="2px"
          columnGap={"15px"}
          marginTop={"15px"}
          padding={"10px"}
        >
          {renderDetailItem(
            "Would you like our student mentor to assist you in the admission process?",
            "Yes"
          )}
          {renderDetailItem("Program", "Global MBA")}
          {renderDetailItem("Campus Format", "a0jHy000001mDqMIAU")}
          {renderDetailItem("Academic Cycle", "2025")}
          {renderDetailItem(
            "Do you have more than 3 years of Work Experience ?",
            "Yes"
          )}
        </Box>
      </Box>
      <Box className={classes.SubSummaryContainer}>
        <Typography className={classes.SubSummaryContainerTypo}>
          Course Details
        </Typography>
        <Divider />
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap="2px"
          columnGap={"15px"}
          marginTop={"15px"}
          padding={"10px"}
        >
          {renderDetailItem(
            "Would you like our student mentor to assist you in the admission process?",
            "Yes"
          )}
          {renderDetailItem("Program", "Global MBA")}
          {renderDetailItem("Campus Format", "a0jHy000001mDqMIAU")}
          {renderDetailItem("Academic Cycle", "2025")}
          {renderDetailItem(
            "Do you have more than 3 years of Work Experience ?",
            "Yes"
          )}
        </Box>
      </Box>
      <Box className={classes.SubSummaryContainer}>
        <Typography className={classes.SubSummaryContainerTypo}>
          Course Details
        </Typography>
        <Divider />
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap="2px"
          columnGap={"15px"}
          marginTop={"15px"}
          padding={"10px"}
        >
          {renderDetailItem(
            "Would you like our student mentor to assist you in the admission process?",
            "Yes"
          )}
          {renderDetailItem("Program", "Global MBA")}
          {renderDetailItem("Campus Format", "a0jHy000001mDqMIAU")}
          {renderDetailItem("Academic Cycle", "2025")}
          {renderDetailItem(
            "Do you have more than 3 years of Work Experience ?",
            "Yes"
          )}
        </Box>
      </Box>
      <Box className={classes.SubSummaryContainer}>
        <Typography className={classes.SubSummaryContainerTypo}>
          Course Details
        </Typography>
        <Divider />
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap="2px"
          columnGap={"15px"}
          marginTop={"15px"}
          padding={"10px"}
        >
          {renderDetailItem(
            "Would you like our student mentor to assist you in the admission process?",
            "Yes"
          )}
          {renderDetailItem("Program", "Global MBA")}
          {renderDetailItem("Campus Format", "a0jHy000001mDqMIAU")}
          {renderDetailItem("Academic Cycle", "2025")}
          {renderDetailItem(
            "Do you have more than 3 years of Work Experience ?",
            "Yes"
          )}
        </Box>
      </Box>
      <Box className={classes.SubSummaryContainer}>
        <Typography className={classes.SubSummaryContainerTypo}>
          Course Details
        </Typography>
        <Divider />
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap="2px"
          columnGap={"15px"}
          marginTop={"15px"}
          padding={"10px"}
        >
          {renderDetailItem(
            "Would you like our student mentor to assist you in the admission process?",
            "Yes"
          )}
          {renderDetailItem("Program", "Global MBA")}
          {renderDetailItem("Campus Format", "a0jHy000001mDqMIAU")}
          {renderDetailItem("Academic Cycle", "2025")}
          {renderDetailItem(
            "Do you have more than 3 years of Work Experience ?",
            "Yes"
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileSummary;
