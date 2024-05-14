"use client";
import { ReactChildren } from "@/interfaces/Common";
import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles.module";
import Login from "@/app/(auth)/login/page";

const AuthLayout: React.FunctionComponent<ReactChildren> = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.authContainer} xs={12}>
      <Grid item xs={0} md={6}>
        <Box className={classes.authImgContainer}>
          <Typography className={classes.authImgContainerText}>
            Impacting World Through Education
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* {children}  // TODO: uncomment this line */}
        <Login />
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
