"use client";
import { FormJsonFields } from "@/interfaces/Common";
import { useFieldArray, useForm } from "react-hook-form";
import { useStyles } from "../styles.module";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { Box, FormControlLabel, Grid, IconButton, Switch } from "@mui/material";
import RowContent from "../RowContent";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AppButton } from "@/components/AppButton";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KenColors from "@/helpers/themes/kenColors";


const QuestionArrayFields: React.FunctionComponent<FormJsonFields> = (
  props
) => {
  const { control } = useForm();
  const {
    fields: questionArrayFields,
    append,
    remove,
  } = useFieldArray({ name: props.metadata?.name as string, control: control });
  const classes = useStyles();

  useEffect(() => {
    append(props.defaultFields);
  }, []);

  const handleRemoveRecord = (key: number) => {
    if (questionArrayFields.length === 1) {
      return enqueueSnackbar({
        message: "Atlest one record is required",
        variant: "error",
      });
    } else {
      remove(key);
    }
  };

  return questionArrayFields.map((items, index) => {
    return (
      <>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={
            props.metadata?.actionAlingment === "bottom"
              ? "column-reverse"
              : "column"
          }
          marginTop={
            index !== 0 && props.metadata?.removeMultiple ? "20px" : "0px"
          }
          key={items.id}
          sx={{
            border: "0.5px solid var(--secondary-secondary-400, #5981FF)",
            borderRadius: "12px",
            padding: { xs: "5px", sm: "10px", xl: "20px" },
            background: "var(--neutrals-neutrals-50, #F6F8FB)",
          }}
        >
          <Grid item container md={12} lg={12} spacing={1}>
            {props.fieldsArray?.map((rows, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={rows.grid.xs}
                  md={rows.grid.md}
                  lg={rows.grid.lg}
                >
                  {rows.fields.map((fields, index) => {
                    fields["name"] = fields.dynamicName
                      ? `${fields.dynamicName} ${index + 1}`
                      : fields.name;
                    return (
                      <RowContent
                        key={index}
                        arrayIndex={index}
                        fields={{ ...fields }}
                        arrayName={`${props.metadata?.name}.${index}`}
                      />
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              marginTop: "100px",
            }}
          >
            <FormControlLabel
              control={<Switch defaultChecked sx={{ marginLeft: "10px" }} />}
              label="Required"
              labelPlacement="start"
              sx={{
                display: "flex", // Align items center
                alignItems: "center", // Align items center
                "& .MuiSwitch-thumb": {
                  backgroundColor: "#5981FF", // Change thumb color
                },
                "& .css-pvqebb-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":
                  {
                    backgroundColor: "#5981FF", // Track color initially
                  },
                "& .MuiTypography-root": {
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "2px",
                },
              }}
            />

            <IconButton sx={{ marginLeft: { xs: "1px", lg: "24px" } }}>
              <DeleteOutlineIcon
                sx={{ fontSize: { xs: "20px", lg: "24px" } }}
              />
            </IconButton>
          </Box>
          {!props.metadata?.removeMultiple &&
            index === questionArrayFields.length - 1 && (
              <Box
                display={"flex"}
                flexDirection={"row-reverse"}
                justifyContent={"space-between"}
              >
                <Box />
                <AppButton
                  width="100px"
                  variant="contained"
                  size="small"
                  className={classes.arrayButton3}
                  startIcon={<AddIcon />}
                  onClick={() => {
                    append(props.defaultFields);
                  }}
                >
                  Add question
                </AppButton>
              </Box>
            )}
        </Box>
        <div className={classes.scheduleHeaderContainer}>
          {props.metadata?.removeMultiple && (
            <>
              {index + 1 === questionArrayFields.length ? (
                <AppButton
                  width="100px"
                  variant="contained"
                  size="small"
                  className={classes.arrayButton3}
                  startIcon={<AddIcon />}
                  onClick={() => {
                    append(props.defaultFields);
                  }}
                >
                  Add question
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
      </>
    );
  });
};

export default QuestionArrayFields;
