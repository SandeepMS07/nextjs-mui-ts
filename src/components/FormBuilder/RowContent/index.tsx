"use client";
import { useAppFormContext } from "@/helpers/contexts/formContext";
import { FormJsonFields, SelectOptions, ValuesOfContent } from "@/interfaces/Common";
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import FieldsBuilder from "../FieldsBuilder";

const RowContent: React.FunctionComponent<{
  fields: FormJsonFields;
  arrayName?: string;
  arrayIndex?: number;
}> = (props) => {
  const { fields, arrayName, arrayIndex } = props;
  const { watch, getValues, control } = useFormContext();
  const {
    dispatch,
    state: { options },
  } = useAppFormContext();

  const customName = arrayName ? `${arrayName}.${fields.name}` : fields.name;
  const getParentName =
    customName?.split(".")?.length === 3 && customName?.split(".")[0];
  const getFieldName =
    customName?.split(".")?.length === 3 && customName?.split(".")[2];
  const customLabel = fields.dynamicLabel
    ? `${fields.dynamicLabel} ${(arrayIndex as number) + 1}`
    : fields.label;
  const hasRuleKey = fields.rule?.key;
  const hasRuleValue = fields.rule?.value;
  const operations = fields.rule?.operation;

  const watchField = useWatch({
    name: fields?.allowWatch ? `${customName}` : "",
    control: control,
  });

  useEffect(() => {
    const realOptions = fields?.uniqueoptions || [];
    const newOptions: Array<SelectOptions> = [];
    if (
      realOptions.length > 0 &&
      typeof getParentName === "string" &&
      typeof getFieldName === "string"
    ) {
      const getExistingClasses = getValues(getParentName)?.map(
        (items: ValuesOfContent<string>) => {
          return items[getFieldName];
        }
      );
      for (let i = 0; i < realOptions?.length; i++) {
        const element = realOptions[i];
        const isDataPresent = getExistingClasses?.find((items: string) => {
          return items === element.value;
        });
        if (!isDataPresent) {
          newOptions.push({ ...element, disabled: false });
        } else {
          newOptions.push({ ...element, disabled: true });
        }
      }
      dispatch({
        type: "updateOptions",
        value: {
          fieldName: getFieldName,
          selectOptions: newOptions,
        },
      });
    }
  }, [watchField]);

  if (hasRuleKey) {
    const value = watch(`${fields.rule?.key}`);
    switch (operations) {
      case "VISIBLE":
        fields["visible"] = false;
        if (value === hasRuleValue) {
          fields[`${fields.rule?.modifyKey}` as keyof FormJsonFields] =
            fields.rule?.modifyValue;
        }
        break;
      case "VALUEPASS":
        fields[`${fields.rule?.modifyKey}` as keyof FormJsonFields] = value;
        break;
      default:
        return null;
    }
  }

  if (fields.rule?.operation === "VISIBLE") {
    if (fields.visible) {
      return <FieldsBuilder fields={{ ...fields, name: customName, label: customLabel, options: getFieldName ? options[getFieldName] : fields.options }} />;
    } else {
      return null;
    }
  } else {
    return <FieldsBuilder fields={{ ...fields, name: customName, label: customLabel, options: getFieldName ? options[getFieldName] : fields.options }} />;
  }
};

export default RowContent;
