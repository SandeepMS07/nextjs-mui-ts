"use client";
import KenInput from "@/components/KenComponents/KenInput";
import KenSelect from "@/components/KenComponents/KenSelect";
import { getOptions } from "@/helpers/api/apiService";
import { useAppFormContext } from "@/helpers/contexts/formContext";
import { FormJsonFields, SelectOptions } from "@/interfaces/Common";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import RadioField from "../RadioField";
import { useStyles } from "../styles.module";

const FieldsBuilder: React.FunctionComponent<{ fields: FormJsonFields }> = (
  props
) => {
  const { fields } = props;
  const classes = useStyles();
  const { control, register } = useFormContext();
  const {
    state: { options },
    dispatch,
  } = useAppFormContext();

  useEffect(() => {
    if (fields.optionsMeta) {
      const { optionsMeta } = fields;
      getOptions(optionsMeta.objectName, optionsMeta.fieldName)
        .then((res) => {
          if (res?.success) {
            const selectOptions =
              (fields.options || [])?.length > 0
                ? fields.options
                : (res?.data?.map((items: string) => {
                    return { value: items, label: items };
                  }) as Array<SelectOptions>);
            dispatch({
              type: "updateOptions",
              value: {
                fieldName: optionsMeta.fieldName,
                selectOptions: selectOptions,
              },
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  switch (fields.type) {
    case "yesOrNo":
      return <RadioField fields={{ ...fields }} />;
    case "radio":
      return <RadioField fields={{ ...fields }}/>;
    case "textarea":
      return (
        <div style={{ ...fields.fieldStyle }}>
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <KenInput
                  onChange={onChange}
                  value={value}
                  error={error?.message}
                  border
                  customMargin
                  labelClassName={classes.inputLableCustom}
                  InputProps={{ className: classes.inputStyles }}
                  {...fields}
                />
              );
            }}
            {...register(`${fields.name}`, { ...fields?.validation })}
          />
        </div>
      );
    case "select":
      return (
        <div style={{ ...fields.fieldStyle }}>
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              const customOptions =
                fields.optionsMeta && Object.keys(options).length > 0
                  ? options[`${fields.optionsMeta?.fieldName}`]
                  : fields.options;
              return (
                <KenSelect
                  onChange={onChange}
                  value={value}
                  error={error?.message}
                  border
                  customMargin
                  labelClassName={classes.inputLableCustom}
                  InputProps={{ className: classes.inputStyles }}
                  {...fields}
                  options={customOptions}
                />
              );
            }}
            {...register(`${fields.name}`, { ...fields?.validation })}
          />
        </div>
      );
    default:
      return (
        <div style={{ ...fields.fieldStyle }}>
          <Controller
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <KenInput
                  border
                  customMargin
                  labelClassName={classes.inputLableCustom}
                  onChange={onChange}
                  value={value}
                  error={error?.message}
                  InputProps={{ className: classes.inputStyles }}
                  {...fields}
                />
              );
            }}
            {...register(`${fields.name}`, { ...fields?.validation })}
          />
        </div>
      );
  }
};

export default FieldsBuilder;
