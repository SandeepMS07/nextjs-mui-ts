import { Images } from "@/assets/assetHelper";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  authContainer: {
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.KenColors.kenWhite,
    padding: "36px 0px 36px 36px",
  },
  authImgContainer: {
    height: "100%",
    backgroundImage: `url(${Images.loginImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(4px)",
    borderEndEndRadius: "60px",
    position: "relative",
  },
  authImgContainerText: {
    position: "absolute",
    bottom: "20px",
    left: "40px",
    fontSize: "60px",
    fontWeight: "600",
    color: theme.palette.KenColors.kenWhite,
    textAlign: "start",
    width: "80%",
  },
 
}));
