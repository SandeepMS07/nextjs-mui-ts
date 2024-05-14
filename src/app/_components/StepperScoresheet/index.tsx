import {
  Box,
  Button,
  Divider,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useStyles } from "../styles.module";
import { useState } from "react";
import KenColors from "@/helpers/themes/kenColors";
import { FormProvider, useForm } from "react-hook-form";
import { AppButton } from "@/components/AppButton";
import FormBuilder from "@/components/FormBuilder";
import {
  firstFormJson,
  fourthFormJson,
  secondFormJson,
  thirdFormJson,
} from "@/utils/formJsons/interviewForm";
import { useRouter } from "next/navigation";
import routes from "@/helpers/routes/routes";
import { useSnackbar } from "notistack";

const StepperScoresheet = () => {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { enqueueSnackbar } = useSnackbar();
  const method = useForm<any>({
    mode: "onChange",
  });
  const { handleSubmit } = method;

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Work Experience and Goals ahead",
    "Obervation",
    "Final Look",
    "Decision Section",
  ];

  const handleNext = (data: any) => {
    if (activeStep === 3) {
      enqueueSnackbar({
        message: "Scoresheet Submitted",
        variant: "success",
      });
      router.push(routes.interview);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box className={`${classes.stepperScoresheetContainer}`}>
      <FormProvider {...method}>
        <Box
          sx={{
            height: "100%",
            overflow: "hidden",
          }}
          component={"form"}
          onSubmit={handleSubmit(handleNext)}
        >
          <Box
            className={classes.StepperLabelContainer}
            sx={{ position: "sticky" }}
            zIndex={999}
          >
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};

                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps} className={classes.stepLabel}>
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
          <Divider />

          <Box className={classes.stepperBody}>
            {activeStep === 0 ? (
              <Grid
                item
                container
                spacing={5}
                xs={12}
                md={12}
                className="scrollbar-cus"
                sx={{ overflowY: "auto" }}
                padding={"10px 30px 0px 30px"}
                height={isMobile ? "100vh" : "70vh"}
              >
                <FormBuilder formJson={firstFormJson} />
              </Grid>
            ) : activeStep === 1 ? (
              <Grid
                item
                container
                spacing={4}
                xs={12}
                md={12}
                className="scrollbar-cus"
                padding={"10px 30px 0px 30px"}
                height={isMobile ? "100vh" : "65vh"}
              >
                <FormBuilder formJson={secondFormJson} />
              </Grid>
            ) : activeStep === 2 ? (
              <Grid
                item
                container
                spacing={4}
                xs={12}
                md={12}
                className="scrollbar-cus"
                padding={"10px 30px 0px 30px"}
                height={isMobile ? "100vh" : "70vh"}
              >
                <FormBuilder formJson={thirdFormJson} />
              </Grid>
            ) : (
              <Grid
                item
                container
                spacing={4}
                xs={12}
                md={12}
                className="scrollbar-cus"
                padding={"10px 30px 0px 30px"}
                height={isMobile ? "100vh" : "70vh"}
              >
                <FormBuilder formJson={fourthFormJson} />
              </Grid>
            )}
          </Box>

          <Divider />
          <Box
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
            padding={"10px 20px 0px 10px"}
            zIndex={"99"}
            sx={{backgroundColor:KenColors.kenWhite}}
          >
            <AppButton
              size="medium"
              variant="text"
              disabled={activeStep === 0}
              others={{ color: KenColors.ClientBlack2 }}
              // className={classes}
              onClick={handleBack}
            >
              Back
            </AppButton>
            <AppButton
              type="submit"
              size="medium"
              variant="contained"
              className={classes.stepperBtn}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </AppButton>
          </Box>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default StepperScoresheet;
