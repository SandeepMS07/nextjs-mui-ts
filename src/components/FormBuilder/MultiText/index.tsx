"use client";
import { FormJsonFields } from "@/interfaces/Common";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { useStyles } from "../styles.module";
import { useEffect, useRef, useState } from "react";
import { useAppFormContext } from "@/helpers/contexts/formContext";
import KenTextLabel from "@/components/KenComponents/KenTextLabel";
import { IconButton, Typography } from "@mui/material";
import KenColors from "@/helpers/themes/kenColors";
import CancelIcon from '@mui/icons-material/Cancel';

const MultiText: React.FunctionComponent<FormJsonFields> = (field) => {
  const { control, setValue, register, clearErrors, setError } =
    useFormContext();
  const classes = useStyles();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    dispatch,
    state: { multiText },
  } = useAppFormContext();

  const [trigger, setTrigget] = useState<number>(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newSkill = textareaRef.current?.value;
      if (newSkill) {
        dispatch({
          type: "updateMultiText",
          value: {
            fieldName: field.name,
            multiData: newSkill,
          },
        });
        setValue(`${field.name}`, " ");
        setTrigget((prev) => {
          return prev + 1;
        });
      }
    }
  };

  const handleMouseLeave = () => {
    const newSkill = textareaRef.current?.value;
    if (newSkill) {
      dispatch({
        type: "updateMultiText",
        value: {
          fieldName: field.name,
          multiData: newSkill,
        },
      });
      setValue(`${field.name}`, " ");
      setTrigget((prev) => prev + 1);
    }
  };

  const handleDelete = (key: number) => {
    dispatch({
      type: "deleteMultiText",
      value: {
        fieldName: field.name,
        fieldIndex: key,
      },
    });
    setTrigget((prev) => {
      return prev + 1;
    });
  };

  const handleClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const watchedValue = useWatch({
    name: `${field.name}`,
    control: control,
  });

  useEffect(() => {
    if (
      (multiText[`${field.name}`] || []).length === 0 ||
      watchedValue === " "
    ) {
      clearErrors(`${field.name}`);
    } else {
      setError(`${field.name}`, {
        message: "Field is required",
        type: "required",
      });
    }
  }, [multiText, watchedValue, trigger]);

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div style={{ margin: '10px 0px', ...field.fieldStyle }}>
            <KenTextLabel label={field.label} labelClassName={classes.inputLableCustom} />
            <div onClick={handleClick} className={classes.multiSelectInputConatiner} onMouseLeave={handleMouseLeave}>
              <div className={classes.multiSelectInput}>
                {(multiText[`${field.name}`] || []).map((items, index) => {
                  return (
                    <span key={index} className={classes.multiSelectCells}>
                      {items}
                      &nbsp;&nbsp;&nbsp;
                      <IconButton
                        style={{ margin: '0px', padding: '0px' }}
                        onClick={() => {
                          handleDelete(index);
                        }}
                      >
                        <CancelIcon color={KenColors.ClientBlack2 as any} fontSize="small" />
                      </IconButton>
                    </span>
                  );
                })}
                <textarea
                  placeholder="Skills"
                  id="app-textArea"
                  ref={textareaRef}
                  onChange={onChange}
                  value={value}
                 className={classes.multiSelectTextField}
                />
              </div>
            </div>
            {error?.message && (!multiText[`${field.name}`] || multiText[`${field.name}`]?.length === 0) ? (
              <Typography textAlign={'start'} color={KenColors.red2} fontSize={'14px'} fontWeight={'500'}>
                Field is required
              </Typography>
            ) : null}
          </div>
        );
      }}
      {...register(`${field.name}`, { ...field.validation })}
    />
  );
};

export default MultiText;
