import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  SummaryContainer: {
    height: "100%",
  },
  SubSummaryContainer: {
    padding: "20px",
    backgroundColor: theme.palette.KenColors.ClientGrey2,
    borderRadius: "12px",
    marginTop: "10px",
    overflowY: "auto",
  },
  SubSummaryContainerTypo: {
    fontSize: "16px !important",
    fontWeight: "500",
    lineHeight: "22px",
    marginBottom: "10px",
  },
  summaryHeadingSubContainer: {
    marginTop: "10px",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      marginTop: "5px",
      marginBottom: "10px",
    },
  },
  summaryHeadingTypo: {
    fontSize: "14px",
    marginBottom: "2px",
    fontWeight: "500",
    color: theme.palette.KenColors.ClientGrey,
    lineHeight: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  summaryTypo2: {
    color: theme.palette.KenColors.ClientBlack,
    fontSize: "16px",
    fontWeight: "500 !important",
    lineHeight: "23px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  DocumentSubContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  DocumentBtn: {
    backgroundColor: `${theme.palette.KenColors.ClientPrimaryGrey} !important`,
    color: `${theme.palette.KenColors.ClientBlack2} !important`,
    padding: "8px 32px !important",
    "&:hover": {
      backgroundColor: `${theme.palette.KenColors.ClientPrimaryGrey} !important`,
      color: `${theme.palette.KenColors.ClientBlack2} !important`,
    },
  },
}));
