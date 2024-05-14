import KenButton from "@/components/KenComponents/KenButton";
import { Box, Typography } from "@mui/material";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Box
      role="alert"
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Typography style={{ marginTop: 10 }}>Something went wrong</Typography>
      <KenButton onClick={resetErrorBoundary}>Click here to Refresh</KenButton>
    </Box>
  );
};

export default ErrorFallback;
