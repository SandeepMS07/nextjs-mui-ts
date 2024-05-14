import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    rowHeader: {
      margin: "15px",
      fontWeight: "500 !important",
      fontSize: "20px !important",
      textAlign: "start",
    },
    divider: {
      padding: "0px 30px 0px 0px",
      color: `${theme.palette.KenColors.ClientBlue4} !important`,
    },
    cardCoverPhoto: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        height: '273px',
        borderRadius: '8px !important',
        boxShadow: 'none !important',
        backgroundPosition: 'center !important',
        backgroundSize: 'cover !important',
        marginBottom: '10px',
      },
      arrayButton: {
        padding: '6px 10px',
        color: `${theme.palette.KenColors.kenBlack} !important`,
        fontSize: '16px !important',
        borderRadius: '12px !important',
        [theme.breakpoints.down('md')]: {
          fontSize: '14px !important',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '12px !important',
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '10px !important',
        },
      },
      arrayButton2: {
        color: `${theme.palette.KenColors.ClientBlue6} !important`,
        fontSize: '16px !important',
        borderRadius: '12px !important',
      },
      arrayButton3: {
        fontSize: '16px !important',
        borderRadius: '8px !important',
      },
      cardCoverFooter: {
        fontSize: '16px !important',
        fontWeight: '500 !important',
        borderRadius: '8px !important',
        color: theme.palette.KenColors.ClientBlack2,
        background: theme.palette.KenColors.ClientBlue,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        lineHeight: '22px',
        [theme.breakpoints.down('md')]: {
          fontSize: '14px !important',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '12px !important',
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '10px !important',
        },
      },
      inputLableCustom: {
        color: `${theme.palette.KenColors.ClientBlack2} !important`,
        fontSize: '16px !important',
        fontWeight: '500 !important',
        margin: '6px 0px !important',
        textAlign:"start",
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
      customFieldContainer: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
      },
      customUploadField: {
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '8px',
        padding: '14px 6px',
        cursor: 'pointer',
        height: '30px',
        alignItems: 'center',
      },
      customUploadFieldText: {
        fontSize: '16px',
        fontWeight: '400 !important',
        color: theme.palette.KenColors.ClientGrey,
        margin: '0px',
        opacity: '0.9',
        paddingLeft: '8px',
      },
      scheduleHeaderContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '16px 0px',
      },
      scheduleHeader: {
        fontSize: '20px !important',
        fontWeight: '500 !important',
        color: theme.palette.KenColors.ClientBlack2,
      },
      scheduleHeaderSubTitle: {
        fontSize: '16px !important',
        fontWeight: '500 !important',
        color: theme.palette.KenColors.ClientBlack2,
      },

      multiSelectInputConatiner: {
        height: '150px',
        width: '100%',
        border: `1px solid ${theme.palette.KenColors.grey}`,
        textAlign: 'start',
        overflowY: 'auto',
        overflowX: 'hidden',
        margin: '8px 0px',
        borderRadius: '4px',
      },
      multiSelectInput: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'start',
        gap: '6px',
        width: '100%',
        margin: '10px',
      },
      multiSelectCells: {
        fontSize: '14px',
        fontWeight: '500 !important',
        background: theme.palette.KenColors.ClientGrey3,
        padding: '6px 10px',
        borderRadius: '20px',
        textTransform: 'capitalize',
      },
      multiSelectTextField: {
        border: 'none',
        outline: 'none',
        fontSize: '14px !important',
        fontWeight: '500 !important',
        '&::placeholder': {
          fontWeight: '600 !important',
          color: '#5d59595a',
        },
      },
      inputStyles: {
        borderRadius: '8px !important',
        fontSize: '16px !important',
        [theme.breakpoints.down('md')]: {
          fontSize: '14px !important',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '12px !important',
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '10px !important',
        },
      },
  };
});
