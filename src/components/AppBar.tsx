import {
  AppBar as AppBarMUI,
  Toolbar,
  Box,
  IconButton,
  Select,
  MenuItem,
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
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "pl" | "en")}
              sx={{ color: "inherit", mr: 1 }}
            >
              <MenuItem value="pl">PL</MenuItem>
              <MenuItem value="en">EN</MenuItem>
            </Select>
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
