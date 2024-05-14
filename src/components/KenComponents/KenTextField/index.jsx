import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { isString } from 'lodash';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    width: '100% !important',
    marginTop: '5px',
    minWidth: '200px !important',
  },
  helperText: {
    marginLeft: 0,
    fontSize: '12px',
    color: '#FC2C32',
  },
});

const StyledTextField = styled(TextField)(({ error, border, theme, customMargin, height }) => ({
  fontSize: '12px',
  '& .MuiOutlinedInput-root': {
    background: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    height: height ? `${height} !important` : 'auto',
    color: '#8C8E94',
    margin: customMargin ? '4px 0px' : '0px',
    input: {
      '&::placeholder': {
        fontWeight: '500',
        color: '#000',
      },
    },
    '& fieldset': {
      border: border ? '0.5px solid' : '2px solid',
      borderColor: theme.palette.KenColors.grey,
    },
    '&:hover fieldset': {
      border: border ? '0.5px solid' : '2px solid',
      borderColor: error ? theme.palette.KenColors.statusRed : theme.palette.KenColors.grey,
    },
    '&.Mui-focused fieldset': {
      border: border ? '0.5px solid' : '2px solid',
      borderColor: error ? theme.palette.KenColors.statusRed : theme.palette.KenColors.grey,
    },
  },
}));

export default function KenTextField(props) {
  const {
    FormHelperTextProps,
    InputLabelProps,
    inputProps,
    InputProps,
    className,
    children,
    disableKeyDown,
    minDate,
    maxDate,
    name,
    value,
    remaining = false,
    maxCharacters,
    dateType = 'year',
    withValue,
  } = props;
  const classes = useStyles();

  return (
    <StyledTextField
      className={`${className}`}
      classes={{ root: classes.root }}
      InputLabelProps={{ shrink: false, ...InputLabelProps }}
      inputProps={{
        ...inputProps,
        style: { height: 'auto' },
      }}
      InputProps={{
        components: 'p',
        className: classes.inputStyles,
        ...InputProps,
        inputProps: {
          min:
            minDate &&
            minDate !== null &&
            (minDate === true
              ? moment().format('YYYY-MM-DD')
              : isString(minDate)
              ? minDate
              : withValue
              ? moment(value).subtract(Number(minDate), dateType).format('YYYY-MM-DD')
              : moment().subtract(Number(minDate), dateType).format('YYYY-MM-DD')),
          max:
            maxDate &&
            maxDate !== null &&
            (maxDate === true
              ? moment().format('YYYY-MM-DD')
              : withValue
              ? moment(value).add(Number(maxDate), dateType).format('YYYY-MM-DD')
              : moment().add(Number(maxDate), dateType).format('YYYY-MM-DD')),
          'data-testid': `test-${name}`,
        },
      }}
      FormHelperTextProps={{
        className: classes.helperText,
        ...FormHelperTextProps,
      }}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            style: {
              maxHeight: '300px',
            },
          },
        },
      }}
      {...props}
      onKeyDown={(e) => {
        disableKeyDown && e.preventDefault();
      }}
      label=""
      helperText={<>{remaining === true && <p style={{ color: '#505F79', marginTop: '-2px' }}>Remaining Characters: {maxCharacters - (value?.length || 0)}</p>}</>}
    >
      {children}
    </StyledTextField>
  );
}
