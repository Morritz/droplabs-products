import { Box, CircularProgress } from "@mui/material";

export function CircularLoadingProgress() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="60vh"
    >
      <CircularProgress />
    </Box>
  );
}
