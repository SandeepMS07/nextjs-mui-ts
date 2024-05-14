"use client"

import KenColors from "@/helpers/themes/kenColors";
import { Breadcrumbs, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { usePathname  } from "next/navigation";
import { Key } from "react";


const useStyles = makeStyles((theme: Theme) => ({
    mainText: {
        // fontSize: '20px !important',
        fontWeight: '600 !important',
        textDecoration: 'none',
        textTransform: 'capitalize',
        margin: '0px !important',
        padding: '0px !important',
      },
      listText: {
        textDecoration: 'none',
        textTransform: 'capitalize',
        margin: '0px !important',
        padding: '0px !important',
      },
  }));

const AppBreadCrumbs: React.FunctionComponent = () => {
    const pathname = usePathname();
    const classes = useStyles();
    const pathSegments = pathname.split('/').filter(Boolean);
    return (
        <>
      <Typography
       className={classes.mainText} 
       color={KenColors.ClientBlack2} fontSize={{ xs: "12px", md: "16px", lg: "20px" }}>
       {pathSegments.length === 0 ? 'Interview' : pathSegments[0]}  {/* Display the first segment */}
      </Typography>
      {pathSegments.length > 1 && (
        <Breadcrumbs separator={<Typography sx={{ fontSize: { xs: "10px", md: "12px", lg: "14px" }, fontWeight: "500" }}>&gt;</Typography>} style={{ color: KenColors.ClientBlack2 }}>
          {pathSegments.map((item: string, index: any) => {
            const isLastIndex = index === pathSegments.length - 1;
            const newItem = item.replace(/-/g, " ");  

          
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

            return (
              <Link key={index} href={href} passHref> 
                <Typography
                  className={classes.listText}
                  sx={{
                    color: isLastIndex ? KenColors.ClientBlack2 : KenColors.ClientBlue3,
                    fontWeight: isLastIndex ? "400" : "600",
                    fontSize: { xs: "10px", md: "12px", lg: "14px" },
                  }}
                >
                  {newItem}Interview
                </Typography>
              </Link>
            );
          })}
        </Breadcrumbs>
      )}
    </>
    );
}

export default AppBreadCrumbs;