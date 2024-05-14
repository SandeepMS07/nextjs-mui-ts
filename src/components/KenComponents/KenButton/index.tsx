import React from "react";
import Button from "@mui/material/Button";

export default function KenButton(props: any) {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
}
