import { AppBar as AppBarMUI, Toolbar, Box } from '@mui/material';
import { AppBarButton } from './AppBarButton';

export default function AppBar() {
    return (
        <AppBarMUI position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBarButton title="Home" path="/" />
                    <AppBarButton title="Products" path="/products" />
                </Box>
            </Toolbar>
        </AppBarMUI>
    );
}