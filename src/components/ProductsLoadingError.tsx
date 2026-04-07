import { Box, Container, Typography } from "@mui/material";
import { useLanguage } from "../i18n";

export function ProductsLoadingError() {
  const { t } = useLanguage();
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
        gap={2}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          {t("error")}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          {t("failedToLoadProducts")}
        </Typography>
      </Box>
    </Container>
  );
}
