import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  interViewContainer: {
    height: "100% ",
    backgroundColor: theme.palette.KenColors.kenWhite,
    borderRadius: "12px !important",
    boxShadow: "none !important",
    position: "relative",
    overflow: "hidden",
  },
  inputStyles: {
    height: "42px !important",
    borderRadius: "8px !important",
  },
  screensheetContainer: {
    height: "100%",
    backgroundColor: theme.palette.KenColors.kenWhite,
    overflowY: "auto",
    overflowX: "hidden",
    borderRadius: "16px !important",
    boxShadow: "none !important",
  },


}));
