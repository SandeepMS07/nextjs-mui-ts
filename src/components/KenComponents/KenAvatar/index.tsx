import { Avatar } from "@mui/material";
import React from "react";

interface KenAvatarProps {
  classes: any;
  value?: string;
  src?: string;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "#fff",
      color: "#5981FF",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const KenAvatar: React.FC<KenAvatarProps> = ({ classes, value, src }) => {
  if (src) {
    return <Avatar className={classes} alt="Avatar" src={src} />;
  } else if (value) {
    return <Avatar className={classes} {...stringAvatar(value)} />;
  } else {
    return <Avatar className={classes} />;
  }
};

export default KenAvatar;
