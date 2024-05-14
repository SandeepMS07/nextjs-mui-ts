"use client";
import { Images } from "@/assets/assetHelper";
import { AuthContext } from "@/helpers/contexts/authContext";
import KenColors from "@/helpers/themes/kenColors";
import { ReactChildren } from "@/interfaces/Common";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Box,
  Grid,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import SideNavTabs from "./Tabs";
import { useStyles } from "./styles.module";
import AppBreadCrumbs from "@/components/KenComponents/AppBreadCrumbs";

const AppLayout: React.FunctionComponent<ReactChildren> = ({ children }) => {
  const classes = useStyles();
  const { dispatch } = useContext(AuthContext);
  const isMobile = useMediaQuery("(max-width:1025px)");

  const handleListClick = (path: string, index: number) => {
    //   navigate(path);
  };

  const HandleAccount = () => {
    //   navigate(routes.profile);
  };

  return (
    <Box className={classes.layoutContainer}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Paper className={classes.nav}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "",
              }}
            >
              <Box sx={{ marginBottom: "36px" }}>
                <Image
                  src={Images.DefaultProfileImage}
                  alt={"Profile Image"}
                  className={classes.profileImage}
                  height={isMobile ? 40 : 100}
                  width={isMobile ? 40 : 100}
                  priority={true}
                />

                <Typography className={classes.profileName}>
                  {isMobile
                    ? "Mr Adithya".slice(0, 2).toUpperCase()
                    : "Mr Adithya"}
                </Typography>
                <Typography className={classes.profileId}>ID9824</Typography>
              </Box>
              <SideNavTabs handleListClick={handleListClick} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "",
                marginBottom: "40px",
              }}
            >
              <ListItemButton
                className={classes.listItemButton}
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                }}
              >
                <ListItemIcon sx={{ minWidth: { xs: "2px", lg: "40px" } }}>
                  <LogoutIcon className={classes.listItemIcon} />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                    },
                  }}
                  className={classes.listItemText}
                >
                  Logout
                </ListItemText>
              </ListItemButton>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={3} lg={12}>
            <Grid item container spacing={3} xs={12} lg={12}>
              <Grid item xs={6} sm={8} md={7} lg={9}>
                <Paper
                  className={classes.header}
                  sx={{ borderRadius: "16px !important" }}
                >
                  <AppBreadCrumbs />
                </Paper>
              </Grid>
              <Grid item xs={6} sm={4} md={5} lg={3}>
                <Paper className={classes.actions}>
                  <IconButton sx={{ marginRight: { xs: "1px", lg: "10px" } }}>
                    <NotificationsIcon
                      sx={{ fontSize: { xs: "30px", lg: "36px" } }}
                    />
                  </IconButton>
                  <Box
                    sx={{
                      width: "1px",
                      height: "60px",
                      background: KenColors.ClientBlue8,
                    }}
                  />
                  <Image
                    src={Images.logo}
                    alt={"Logo"}
                    height={isMobile ? 40 : 72}
                    width={isMobile ? 40 : 72}
                    className={classes.actionLogo}
                  />

                  <div
                    style={{
                      textAlign: "start",
                      flex: "1",
                    }}
                  >
                    <Typography className={classes.actionText}>
                      AIMS Institutes
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <Box
              sx={{
                overflow: "auto",
                height: `calc(100vh - 100px)`,
                width: `calc(100vw - 30px)`,
                scrollbarColor: "white",
                paddingTop: "10px",
                paddingLeft: "22px",
                scrollbarWidth: "none",
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppLayout;
