"use client";
import KenTabs from "@/components/KenComponents/KenTabs";
import { Box, Dialog, IconButton } from "@mui/material";
import { useStyles } from "../styles.module";
import ProfileDocument from "./_components/ProfileDocument";
import ProfileSummary from "./_components/ProfileSummary";
import CloseIcon from "@mui/icons-material/Close";

interface ComplaintDialogProps {
  open: boolean;
  onClose: () => void;
  setTookSurvey: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileDialogue: React.FC<ComplaintDialogProps> = ({
  open,
  onClose,
  setTookSurvey,
}) => {
  const classes = useStyles();

  const tabs = [
    { label: "Summary", content: <ProfileSummary /> },
    { label: "Documents", content: <ProfileDocument /> },
  ];

  const onSubmit = () => {};
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth="xl"
      PaperProps={{
        sx: { height: "90vh" },
      }}
    >
      <Box sx={{ position: "relative" }} className="scrollbar-cus">
        <KenTabs tabs={tabs} />
        <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ProfileDialogue;
