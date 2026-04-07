import {
  AppBar as AppBarMUI,
  Toolbar,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { AppBarButton } from "./AppBarButton";
import { CartButton } from "./CartButton";
import { useTheme } from "../store";
import { useLanguage } from "../i18n";

export function AppBar() {
  const darkMode = useTheme((state) => state.darkMode);
  const toggleDarkMode = useTheme((state) => state.toggleDarkMode);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "pl" ? "en" : "pl");
  };

  return (
    <AppBarMUI position="sticky">
      <Toolbar>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
        >
          <Box>
            <AppBarButton title={t("home")} path="/" />
            <AppBarButton title={t("products")} path="/products" />
          </Box>
          <Box>
            <Button color="inherit" onClick={toggleLanguage} sx={{ mr: 1 }}>
              {language.toUpperCase()}
            </Button>
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
            <CartButton />
          </Box>
        </Box>
      </Toolbar>
    </AppBarMUI>
  );
}
