"use client"

import { ReactChildren } from "@/interfaces/Common";
import { styled } from "@mui/system";
import { MaterialDesignContent, SnackbarProvider } from "notistack";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    fontSize: "16px",
    fontWeight: "500",
  },
  "&.notistack-MuiContent-error": {
    fontSize: "16px",
    fontWeight: "500",
  },
  "&.notistack-MuiContent-default": {
    fontSize: "16px",
    fontWeight: "500",
  },
  "&.notistack-MuiContent-warning": {
    fontSize: "16px",
    fontWeight: "500",
  },
  "&.notistack-MuiContent-info": {
    fontSize: "16px",
    fontWeight: "500",
  },
}));

const AppSnackBar: React.FunctionComponent<ReactChildren> = ({ children }) => {
  return (
    <SnackbarProvider
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
        default: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default AppSnackBar;
