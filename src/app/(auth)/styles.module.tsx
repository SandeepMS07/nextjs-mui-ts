import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles= makeStyles((theme:Theme)=>({
    loginForm: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      logoTypo: {
        fontSize: "20px",
        fontWeight: "400",
        color: theme.palette.KenColors.ClientBlack,
      },
      fieldLayout: {
        display: "inline-block",
        alignItems: "center",
        width: "50%",
        [theme.breakpoints.down("md")]: {
            width: "70%",
          },
        [theme.breakpoints.down("sm")]: {
          width: "80%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "90%",
        },
      },
      label: {
        fontWeight: "500 !important",
        fontSize: "16px !important",
        textAlign: "left",
        margin: "4px 0px 5px 0px !important",
        color: theme.palette.KenColors.clientBlackBackground,
        fontFamily: "GeneralSans !important",
      },
      inputStyles: {
        height: "48px !important",
        fontSize: "16px !important",
        borderRadius: "8px !important",
      },
      forgotPwd: {
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "20px",
        textDecoration: "none",
        color: theme.palette.KenColors.ClientBlack2,
      },
      verify: {
        marginTop: "60px !important",
        fontSize: "16px !important",
        fontWeight: "600 !important",
        background: `${theme.palette.KenColors.ClientPrimary} !important`,
        textTransform: "none",
        color: `${theme.palette.KenColors.kenWhite} !important`,
        borderRadius: "8px !important",
        width: "100%",
        height: "48px",
        padding: "12px !important",
      },
}))