import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    layoutContainer:{
      width: "100vw",
      height: "100vh",
      padding:"20px !important",
      backgroundColor: theme.palette.KenColors.ClientGrey2
    },
    header: {
      background: theme.palette.KenColors.kenWhite,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "center",
      height: "70px !important",
      paddingInline: "20px",
      textAlign: "start",
      fontFamily: "GeneralSans",
      boxShadow: "none !important",
      [theme.breakpoints.down("md")]: {
        height: "60px !important",
      },
    },
    nav: {
      background: theme.palette.KenColors.kenWhite,
      width: "100%",
      height: "100%",
      borderRadius: "16px !important",
      border: "1px solid #fcfdffe5",
      minHeight: "90vh",
      boxShadow: "none !important",
      padding: "15px 0px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      position: "relative",
    },
    actions: {
      background: theme.palette.KenColors.kenWhite,
      display: "flex",
      justifyContent: "space-around",
      height: "70px !important",
      paddingInline: "10px",
      alignItems: "center",
      borderRadius: "16px !important",
      boxShadow: "none !important",
      [theme.breakpoints.down("md")]: {
        paddingInline: "5px",
        height: "60px !important",
      },
    },
    actionLogo: {
      height: "72px",
      width: "72px",
      objectFit: "cover",
      borderRadius: "30px !important",
      marginLeft: "20px",
      [theme.breakpoints.down("md")]: {
        marginLeft: "10px",
        height: "40px",
        width: "40px",
      },
    },
    actionText: {
        display:"flex",
      whiteSpace: "wrap",
      fontSize: "16px",
      fontWeight: "500 !important",
      color: theme.palette.KenColors.ClientBlack,
      [theme.breakpoints.down("md")]: {
        fontSize: "14px !important",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px !important",
        display: "hidden"
      },
    },
    profileImage: {
      borderRadius: "50px",
      objectFit: "cover",
      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        marginBottom: "15px",
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: "10px",
      },
    },
    profileName: {
      fontSize: "20px !important",
      fontWeight: "600 !important",
      lineHeight: "28px !important",
      color: theme.palette.KenColors.ClientBlack2,
      [theme.breakpoints.down("md")]: {
        fontSize: "18px !important",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px !important",
      },
    },
    profileId: {
      fontSize: "16px !important",
      fontWeight: "400 !important",
      lineHeight: "22px !important",
      color: theme.palette.KenColors.ClientBlack2,
    },
    listItemButton: {
      borderRadius: "10px 0px 0px 10px !important",
      marginLeft: "10px !important",
      [theme.breakpoints.down("md")]: {
        marginLeft: "2px !important", // Adjust font size for small screens (mobile)
      },
    },
    listItemButtonActive: {
      background: theme.palette.KenColors.ClientPrimary,
    },
    listItemIcon: {
      color: theme.palette.KenColors.grey,
    },
    listItemIconActive: {
      color: theme.palette.KenColors.kenWhite,
    },
    listItemText: {
      color: `${theme.palette.KenColors.ClientBlack2} !important`,
      fontSize: "16px !important",
      fontWeight: "400 !important",
    },
    listItemTextActive: {
      color: `${theme.palette.KenColors.kenWhite} !important`,
      fontSize: "15px !important",
      fontWeight: "600 !important",
    },
  };
});
