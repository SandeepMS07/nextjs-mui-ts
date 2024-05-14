"use client";
import { FormJsonFields } from "@/interfaces/Common";
import { useSnackbar } from "notistack";
import { Controller, useFormContext } from "react-hook-form";
import { useStyles } from "../styles.module";
import { useAppFormContext } from "@/helpers/contexts/formContext";
import { useState } from "react";
import { handleFiles } from "@/helpers/helperFunctions";
import { Box, Divider, Paper, Typography } from "@mui/material";
import KenColors from "@/helpers/themes/kenColors";
import { AppButton } from "@/components/AppButton";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import KenTextLabel from "../../KenComponents/KenTextLabel"
import KenIcon from "@/components/KenComponents/KenIcon";
import { Icons } from "@/assets/assetHelper";
import KenLoader from "@/components/KenComponents/KenLoader";

const FileUpload: React.FunctionComponent<{ field: FormJsonFields }> = (
  props
) => {
  const { field } = props;
  const { register, control } = useFormContext();
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  const {
    state: { files },
    dispatch,
  } = useAppFormContext();
  const [loading, setLoading] = useState(false);

  
  const fileHandler = async (e: React.ChangeEvent<HTMLInputElement>, fields: FormJsonFields) => {
    setLoading(true);
    const data = await handleFiles(e, files, fields?.acceptFiles);
    if (data?.success) {
      dispatch({ type: 'updateFiles', value: { fieldName: fields?.name, fileData: { data: data?.url, name: e.target.files ? e.target.files[0].name : '' } } });
    } else {
      enqueueSnackbar({ message: data?.message, variant: 'error' });
    }
    setLoading(false);
  };


  const FileComponent: React.FunctionComponent = () => {
    switch (field.type) {
      case 'coverField':
        return (
          <Paper style={{ background: files[`${field?.name}`] ? `url(${files[`${field?.name}`].data})` : KenColors.ClientBlue, ...field.fieldStyle }} className={classes.cardCoverPhoto}>
            <Controller
              control={control}
              render={({ field: { onChange } }) => {
                return (
                  <input
                    accept={field?.accept}
                    id={field.name}
                    onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                      await fileHandler(e, field);
                      onChange(e);
                    }}
                    type="file"
                    style={{ display: 'none' }}
                  />
                );
              }}
              {...register(`${field.name}`)}
            />
            <AppButton
              width="220px"
              background={KenColors.kenWhite}
              className={classes.arrayButton}
              others={{ padding: '12px !important' }}
              variant="contained"
              size="small"
              startIcon={<FileUploadOutlinedIcon />}
            >
              <label htmlFor={field.name}>{files[`${field?.name}`] ? files[`${field?.name}`].name : field.label}</label>
            </AppButton>
            <Divider />
            <Typography padding={'10px 0px'} className={classes.cardCoverFooter}>
              {field?.description}
            </Typography>
          </Paper>
        );
      case 'upload':
        return (
          <Controller
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => {
              return (
                <>
                  {field.hideLabel && <KenTextLabel label={field.label} labelClassName={classes.inputLableCustom} />}
                  <div className={classes.customFieldContainer} style={{ margin: '4px 0px 8px 0px', ...field.fieldStyle }}>
                    <input
                      id={field?.id}
                      type="file"
                      accept={field.accept}
                      onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                        await fileHandler(e, field);
                        onChange(e);
                      }}
                      style={{ display: 'none' }}
                    />
                    <Box display={'flex'} alignItems={'center'} gap={'8px'} width={'100%'}>
                      <Box width={'100%'} htmlFor={field?.id} component={'label'} className={classes.customUploadField} border={`1px solid ${error?.message ? KenColors.statusRed : KenColors.grey}`}>
                        <h6 className={classes.customUploadFieldText}>{files[`${field?.name}`] ? files[`${field?.name}`].name : field.label}</h6>
                        <FileUploadOutlinedIcon style={{ height: '26px', color: KenColors.grey }} />
                      </Box>
                      {error?.message && <KenIcon iconType="img" icon={Icons.Error} variant="extraSmall" />}
                    </Box>
                  </div>
                  {error?.message && (
                    <Typography textAlign={'start'} color={KenColors.red2} fontSize={'14px'} fontWeight={'500'}>
                      {error?.message}
                    </Typography>
                  )}
                </>
              );
            }}
            {...register(`${field.name}`, { ...field.validation })}
          />
        );
      default:
        return null;
    }
  };


  return (
    <>
      {loading && <KenLoader />}
      <FileComponent />
    </>
  );
};

export default FileUpload;
