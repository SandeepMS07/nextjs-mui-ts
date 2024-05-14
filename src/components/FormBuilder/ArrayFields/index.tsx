"use client";
import { FormJsonFields } from "@/interfaces/Common";
import { useFieldArray, useForm } from "react-hook-form";
import { useStyles } from "../styles.module";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { Box, Grid, Typography } from "@mui/material";
import { AppButton } from "@/components/AppButton";
import KenColors from "@/helpers/themes/kenColors";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import RowContent from "../RowContent";


const ArrayFields: React.FunctionComponent<FormJsonFields> = (props) => {
  const { control } = useForm();
  const {
    fields: arrayFields,
    append,
    remove,
  } = useFieldArray({ name: props.metadata?.name as string, control: control });
  const classes = useStyles();

  useEffect(() => {
    append(props.defaultFields);
  }, []);

  const handleRemoveRecord = (key: number) => {
    if (arrayFields.length === 1) {
      return enqueueSnackbar({ message: "Atlest one record is required", variant: "error" });
    } else {
      remove(key);
    }
  };

  return arrayFields.map((items, index) => {
    return (
      <Box width={"100%"} display={"flex"} flexDirection={props.metadata?.actionAlingment === "bottom" ? "column-reverse" : "column"} marginTop={index !== 0 && props.metadata?.removeMultiple ? "20px" : "0px"} key={items.id}>
        <div className={classes.scheduleHeaderContainer}>
          <div>
            {index === 0 ? (
              <>
                {props?.title && <Typography className={classes.scheduleHeader}>{props.title}</Typography>}
                {props?.subTitle && <Typography className={classes.scheduleHeaderSubTitle}>{props.subTitle}</Typography>}
              </>
            ) : props.metadata?.removeMultiple && index === arrayFields.length - 1 ? (
              <AppButton
                width="100px"
                background={KenColors.ClientPrimaryGrey}
                variant="contained"
                className={classes.arrayButton}
                size="small"
                startIcon={<RemoveIcon />}
                onClick={() => {
                  handleRemoveRecord(index);
                }}
              >
                Remove
              </AppButton>
            ) : null}
            {props?.metadata?.removeNeeded && (
              <AppButton
                variant="contained"
                size="small"
                others={{ margin: "10px 0px" }}
                className={classes.arrayButton2}
                endIcon={<CloseRoundedIcon />}
                background={KenColors.ClientBlue4}
                onClick={() => {
                  handleRemoveRecord(index);
                }}
              >
                Speaker {index + 1}
              </AppButton>
            )}
          </div>
          {props.metadata?.removeMultiple && (
            <>
              {index + 1 === arrayFields.length ? (
                <AppButton
                  width="100px"
                  background={KenColors.ClientPrimaryGrey}
                  variant="contained"
                  size="small"
                  className={classes.arrayButton}
                  startIcon={<AddIcon />}
                  onClick={() => {
                    append(props.defaultFields);
                  }}
                >
                  Add more
                </AppButton>
              ) : (
                <AppButton
                  width="100px"
                  background={KenColors.ClientPrimaryGrey}
                  variant="contained"
                  className={classes.arrayButton}
                  size="small"
                  startIcon={<RemoveIcon />}
                  onClick={() => {
                    handleRemoveRecord(index);
                  }}
                >
                  Remove
                </AppButton>
              )}
            </>
          )}
        </div>
        <Grid item container md={12} lg={12} spacing={1}>
          {props.fieldsArray?.map((rows,index) => {
            return (
              <Grid key={index} item xs={rows.grid.xs} md={rows.grid.md} lg={rows.grid.lg}>
                {rows.fields.map((fields,index) => {
                  fields["name"] = fields.dynamicName ? `${fields.dynamicName} ${index + 1}` : fields.name;
                  return <RowContent key={index} arrayIndex={index} fields={{ ...fields }} arrayName={`${props.metadata?.name}.${index}`} />;
                })}
              </Grid>
            );
          })}
        </Grid>
        {!props.metadata?.removeMultiple && index === arrayFields.length - 1 && (
          <Box display={"flex"} flexDirection={"row-reverse"} justifyContent={"space-between"}>
            <Box />
            <AppButton
              width="100px"
              background={KenColors.ClientPrimaryGrey}
              variant="contained"
              size="small"
              className={classes.arrayButton}
              startIcon={<AddIcon />}
              onClick={() => {
                append(props.defaultFields);
              }}
            >
              Add more
            </AppButton>
          </Box>
        )}
      </Box>
    );
  });
};

export default ArrayFields;
