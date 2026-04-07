import { AppBar as AppBarMUI, Toolbar, Box, IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { AppBarButton } from "./AppBarButton";
import { CartButton } from "./CartButton";
import { useTheme } from "../store";

export function AppBar() {
  const darkMode = useTheme((state) => state.darkMode);
  const toggleDarkMode = useTheme((state) => state.toggleDarkMode);

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
            <AppBarButton title="Strona główna" path="/" />
            <AppBarButton title="Produkty" path="/products" />
          </Box>
          <Box>
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
