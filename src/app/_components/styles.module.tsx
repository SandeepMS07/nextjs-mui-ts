import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  tableHeadCell: {
    fontSize: "16px !important",
    color: "#172E7D !important",
    fontWeight: "500 !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
  },
  tableBodyCell: {
    fontSize: "16px !important",
    color: "#585A64 !important",
    fontWeight: "400 !important",
    textDecoration: "non !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
  },
  pagination: {
    "& .MuiTablePagination-selectLabel": {
      fontSize: "18px",
      fontWeight: 400,
      color: "#585A64",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
  joinButton: {
    paddingInline: "8px",
  },
  stepperScoresheetContainer: {
    height: "100%",
    padding: "10px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  StepperLabelContainer: {
    backgroundColor: theme.palette.KenColors.kenWhite,
    paddingBlock: "30px",
    paddingInline: "100px",
    [theme.breakpoints.down("lg")]: {
      paddingBlock: "20px",
      paddingInline: "50px",
    },
    [theme.breakpoints.down("md")]: {
      paddingBlock: "15px",
      paddingInline: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBlock: "10px",
      paddingInline: "5px",
    },
  },
  stepLabel: {
    "& .MuiStepConnector-line": {
      display: "none !important",
    },
    "& .MuiSvgIcon-root-MuiStepIcon-root": {
      width: "16px",
      height: "16px",
      [theme.breakpoints.down("md")]: {
        width: "14px",
        height: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "12px",
        height: "12px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "10px",
        height: "10px",
      },
    },
    "& .MuiStepIcon-text": {
      fontSize: "14px !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px !important",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "8px !important",
      },
    },
    "& .MuiStepLabel-label.Mui-active": {
      fontSize: "16px !important",
      color: theme.palette.KenColors.ClientBlack1,
      [theme.breakpoints.down("md")]: {
        fontSize: "14px !important",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px !important",
      },
    },

    "& .MuiStepLabel-label": {
      fontSize: "18px !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px !important",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px !important",
      },
    },
    "& .MuiStepLabel-root.Mui-disabled": {
      "& .MuiStepIcon-text": {
        fontSize: "0px !important",
      },
    },
  },
  stepperBody: {
    flex: "1",
    height: "85%",
  },
  stepperBtn: {
    width: "120px !important",
    paddingInline: "12px !important",
    paddingBlock: "10px !important",
    borderRadius: "8px !important",
    fontSize: "16px !important",
    fontWeight: "600 !important",
  },

  // profile summary

  profileSummaryContainer: {
    height: "auto",
    backgroundColor: theme.palette.KenColors.kenWhite,
    overflowY: "auto",
    overflowX: "hidden",
    borderRadius: "16px !important",
    padding: "20px",
    boxShadow: "none !important",
  },
  profileSummaryTypo: {
    textAlign: "start",
    fontSize: "20px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    marginBottom: "10px !important",
  },
  profileNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  },
  avatar: {
    width: "72px !important",
    height: "72px !important",
    color: `${theme.palette.KenColors.kenWhite} !important`,
    backgroundColor: `${theme.palette.KenColors.ClientBlack} !important`,
    fontSize: "20px !important",
    fontWeight: "500 !important",
  },
  profileNameTypo: {
    fontSize: "20px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    color: theme.palette.KenColors.ClientBlack2,
  },
  profileYearTypo: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
    lineHeight: "19px !important",
    color: theme.palette.KenColors.ClientBlack,
  },
  profileSummaryTypo2: {
    fontSize: "14px !important",
    fontWeight: "400 !important",
    lineHeight: "19px !important",
    // color: theme.palette.KenColors.ClientBlack,
  },
  profileSummaryTypo2Span: {
    fontWeight: "500 !important",
  },
  profileNameContainer2: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  profileNameContainer2Sub: {
    marginTop: "5px",
    display: "flex",
    flexWrap: "wrap",
    gap: "5px 30px",
  },
  profileNameContainer2Sub2: {
    marginTop: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  profileBtn: {
    width: "100%",
    borderRadius: "8px",
  },

  // dialogue box
  dilogHeader: {},
}));
