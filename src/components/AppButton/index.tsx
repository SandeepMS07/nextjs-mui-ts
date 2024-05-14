import { CustomButtonProps } from "@/interfaces/Common";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppButton = styled(Button)<CustomButtonProps>(
  ({ theme, others, background }) => {
    return {
      textTransform: "capitalize",
      boxShadow: "none !important",
      background: background,
      color: others?.color || theme.palette.KenColors.kenWhite,
      "&:hover": {
        background: background,
        color: others?.color || theme.palette.KenColors.kenWhite,
      },
      ...others,
    };
  }
);
