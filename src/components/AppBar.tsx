import { AppBar as AppBarMUI, Toolbar, Box } from '@mui/material';
import { AppBarButton } from './AppBarButton';

export function AppBar() {
    return (
        <AppBarMUI position="sticky">
            <Toolbar>
                <Box>
                    <AppBarButton title="Home" path="/" />
                    <AppBarButton title="Products" path="/products" />
                </Box>
            </Toolbar>
        </AppBarMUI>
    );
}