import { ButtonProps, FilledInputProps, OutlinedInputProps } from '@mui/material';
import { RegisterOptions, SubmitHandler } from 'react-hook-form';
import { CSSProperties } from 'react';
import { QuillOptions } from 'react-quill';
import { InputProps } from 'react-otp-input';

export interface SelectOptions {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectChecked {
  value: string;
  checked: boolean;
}

export interface ConfigUrls {
  url: string;
  apiBaseUrl: string;
  tokenUrl: string;
  logoURL: string;
}

export interface ConfigOptions {
  env: string;
  name: string;
  client: string;
  configUid: string;
  config: ConfigUrls;
  type: string;
  id: string;
}

export interface ReactChildren {
  children: React.ReactNode;
}

export interface ValuesOfStringOnly {
  [key: string]: string;
}

export interface ValuesOfAny {
  [key: string]: any;
}

export interface ValuesOfContent<T> {
  [key: string]: T;
}

export interface FileUpload {
  fileName: string;
  base64Data: string;
}

export interface AppFilterFields {
  [key: string]: string;
}

export interface FilterFields {
  type: 'select' | 'date';
  name: string;
  options?: Array<SelectOptions>;
  label?: string;
  placeholder?: string;
}

export interface FilterProps {
  open: boolean;
  handleClose: () => void;
  transform: { top: string; left: string };
  filterData: AppFilterFields;
  handleFilterSubmit: SubmitHandler<AppFilterFields>;
  dependencyArray: Array<FilterFields>;
  handleChange: (data: string, key: string) => void;
}

export interface PaymentData {
  amount: number;
  currency: string;
  accept_partial: boolean;
  first_min_partial_amount: number;
  description: string;
  customer: {
    name: string;
    email: string;
    contact: string;
  };
  notify: {
    sms: boolean;
    email: boolean;
  };
  reminder_enable: boolean;
  notes: {
    policy_name: string;
    Id: string;
    eventId: string;
    noofParticipant: number;
  };
  callback_url: string;
  callback_method: string;
}

export interface FilterCellsProps {
  handleFilerRemove: (key: string) => void;
  cellsArray: AppFilterFields;
}

export interface NoDataProps {
  title?: string;
  subTitle?: string;
  img: string;
  imgStyles?: CSSProperties;
}

export interface AppFilterProps {
  filterData: AppFilterFields;
  data: Array<any>;
}

export interface CustomButtonProps extends ButtonProps {
  background?: string;
  width?: string;
  others?: CSSProperties;
}


export interface FormJsonArrayMetaData {
  name: string;
  actionAlingment?: 'top' | 'bottom';
  removeMultiple?: boolean;
  removeNeeded?: boolean;
  titleStyles?: CSSProperties;
}


export interface FormJsonFields {
  type: string;
  name?: string;
  dynamicName?: string;
  validation?: RegisterOptions;
  label?: string;
  dynamicLabel?: string;
  acceptFiles?: Array<string>;
  accept?: string;
  height?: string;
  hideLabel?: boolean;
  helperText?: string;
  editorConfigs?: QuillOptions;
  description?: string;
  multiline?: boolean;
  selectLabel?: string;
  errorMessage?: boolean;
  fieldStyle?: CSSProperties;
  style?: CSSProperties;
  remaining?: boolean;
  visible?: boolean;
  rule?: {
    key: string;
    value?: string;
    operation: 'VISIBLE' | 'VALUEPASS';
    modifyKey: keyof FormJsonFields;
    modifyValue?: string | boolean | number;
  };
  uniqueoptions?: Array<SelectOptions>;
  rows?: number;
  options?: Array<SelectOptions>;
  id?: string;
  placeholder?: string;
  title?: string;
  allowWatch?: boolean;
  subTitle?: string;
  minDate?: boolean | string;
  maxDate?: boolean;
  withValue?: string;
  metadata?: FormJsonArrayMetaData;
  InputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps>;
  inputProps?: any;
  defaultFields?: any;
  fieldsArray?: Array<FormRows>;
  optionsMeta?: { objectName: string; fieldName: string };
}

export interface FormGrid {
  md: number;
  lg: number;
  xs: number;
  sm?: number;
}

export interface FormRows {
  grid: FormGrid;
  fields: Array<FormJsonFields>;
  title?: {
    heading: string;
    headingStyles?: CSSProperties;
    subHeading?: String;
    subHeadingStyles?: CSSProperties;
  };
}


export interface FormJson {
  grid: FormGrid;
  rows: Array<FormRows>;
  divider?: boolean;
}


export interface FormBuilderProps {
  formJson: Array<FormJson>;
}

export interface inProgressContents {
  logo: string;
  title: string;
  subTitle: string;
  status: string;
  description?: string;
  coverImage?: string;
}

export interface BannerCardProps {
  routes: string;
  image: string;
  title: string;
  progresstitle?: string;
  inProgressThings?: Array<inProgressContents>;
}

export interface AppToggleButtonsProps {
  handleChange(value: any): void;
  value: string;
  buttonsArray: Array<string>;
}

export interface searchBarData {
  dropDown: string;
  input: string;
}

export interface SearchBarProps {
  handleFilter(): void;
  dropDownData?: Array<SelectOptions>;
  searchBarData?: searchBarData;
  handleDropDownChange?: (value: string) => void;
  handleSearchChange: (value: string) => void;
}
