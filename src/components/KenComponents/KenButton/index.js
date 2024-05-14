import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import styled from "styled-components";

export const KenButtonDefault = styled(Button)`
  border-radius: 3px;
  min-height: 36px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 12px;
  text-transform: none;
`;

const KenButtonSecondary = styled(KenButtonDefault)`
  border: 1px solid #b3bac5;
`;

const StatusButton = styled(Button)`
  border-radius: 4px;
  color: white;
  height: 20px;
  font-weight: 500;
  font-size: 12px;
  padding: 4px 8px;
  box-shadow: none;
  text-transform: none;
`;

const RoundedButton = styled(Button)`
  border-radius: 32px;
  background: linear-gradient(114.33deg, #20365c 6.4%, #060b6b 108.85%);
  color: white;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  padding: 9px 32px;
  box-shadow: none;
  text-transform: none;
  &&& {
    &.Mui-disabled {
      color: rgba(0, 0, 0, 0.26);
      background: #f3f5f7;
    }
  }
`;
const RoundedButtonOutlined = styled(Button)`
  border-radius: 32px;
  background: white;
  color: linear-gradient(114.33deg, #20365c 6.4%, #060b6b 108.85%);
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  border: 2px solid linear-gradient(114.33deg, #20365c 6.4%, #060b6b 108.85%);
  padding: 9px 32px;
  box-shadow: none;
  text-transform: none;
  &&& {
    &.Mui-disabled {
      color: rgba(0, 0, 0, 0.26);
      background: #f3f5f7;
    }
  }
`;

export default function KenButton(props) {
  const {
    variant,
    icon,
    label,
    children,
    buttonClass,
    disabled,
    style,
    type,
    form,
  } = props;
  const propsCopy = Object.assign({}, props);
  if (icon) {
    propsCopy.startIcon = (
      <Box>
        <Image src={icon} alt="icon" fill />
      </Box>
    );
  }

  switch (variant) {
    case "primary":
      return (
        <KenButtonDefault
          data-testid="button"
          type={type}
          form={form}
          {...propsCopy}
          // color='primary'
          variant="contained"
          disableElevation
          // style={{
          //   backgroundColor: disabled
          //     ? activeTheme.buttonPrimary.disabledBackgroundColor
          //     : activeTheme.buttonPrimary.backgroundColor,
          //   color: disabled
          //     ? activeTheme.buttonPrimary.disabledTextColor
          //     : activeTheme.buttonPrimary.textColor,
          //   ...style,
          // }}
          className={buttonClass}
        >
          {label || children}
        </KenButtonDefault>
      );
    case "secondary":
      return (
        <KenButtonSecondary
          data-testid="button"
          {...propsCopy}
          variant="outlined"
          color="primary"
          className={buttonClass}
          type={type}
          form={form}
        >
          {label || children}
        </KenButtonSecondary>
      );
    case "roundedButton":
      return (
        <RoundedButton
          data-testid="button"
          {...propsCopy}
          variant="contained"
          color="primary"
          className={buttonClass}
        >
          {label || children}
        </RoundedButton>
      );
    case "roundedButtonOutlined":
      return (
        <RoundedButtonOutlined
          data-testid="button"
          {...propsCopy}
          variant="outlined"
          // color="primary"
          className={buttonClass}
        >
          {label || children}
        </RoundedButtonOutlined>
      );
    case "error":
      return (
        <StatusButton
          data-testid="button"
          {...propsCopy}
          variant="contained"
          color="error"
          type={type}
          form={form}
        >
          <Typography noWrap>{label || children}</Typography>
        </StatusButton>
      );
    case "success":
      return (
        <StatusButton
          data-testid="button"
          {...propsCopy}
          variant="contained"
          color="success"
          type={type}
          form={form}
        >
          {label || children}
        </StatusButton>
      );

    default:
      return (
        <KenButtonDefault
          data-testid="button"
          type={type}
          form={form}
          {...propsCopy}
          color="primary"
          className={buttonClass}
          // style={{
          //   backgroundColor: disabled
          //     ? activeTheme.buttonPrimary.disabledBackgroundColor
          //     : activeTheme.buttonPrimary.backgroundColor,
          //   color: disabled
          //     ? activeTheme.buttonPrimary.disabledTextColor
          //     : activeTheme.buttonPrimary.textColor,
          //   ...style,
          // }}
        >
          {label || children}
        </KenButtonDefault>
      );
  }
}
