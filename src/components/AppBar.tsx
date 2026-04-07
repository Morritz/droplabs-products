import {
  AppBar as AppBarMUI,
  Toolbar,
  Box,
  IconButton,
  Select,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import {
  LightMode,
  DarkMode,
  Menu,
  Home,
  Inventory,
} from "@mui/icons-material";
import { useState } from "react";
import { AppBarButton } from "./AppBarButton";
import { CartButton } from "./CartButton";
import { useTheme as useAppTheme } from "../store";
import { useLanguage } from "../i18n";
import { Link } from "react-router";

export function AppBar() {
  const darkMode = useAppTheme((state) => state.darkMode);
  const toggleDarkMode = useAppTheme((state) => state.toggleDarkMode);
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("@media (max-width:600px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" sx={{ textAlign: "center" }}>
            <Home sx={{ mr: 1 }} />
            <ListItemText primary={t("home")} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/products"
            sx={{ textAlign: "center" }}
          >
            <Inventory sx={{ mr: 1 }} />
            <ListItemText primary={t("products")} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBarMUI position="sticky">
        <Toolbar>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            )}
            {isMobile ? null : (
              <Box>
                <AppBarButton title={t("home")} path="/" />
                <AppBarButton title={t("products")} path="/products" />
              </Box>
            )}
            <Box>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "pl" | "en")}
                sx={{ color: "inherit", mr: 1 }}
              >
                <MenuItem value="pl">🇵🇱 PL</MenuItem>
                <MenuItem value="en">🇬🇧 EN</MenuItem>
              </Select>
              <IconButton color="inherit" onClick={toggleDarkMode}>
                {darkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
              <CartButton />
            </Box>
          </Box>
        </Toolbar>
      </AppBarMUI>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: isMobile ? "block" : "none",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
