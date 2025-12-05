import { AppBar as AppBarMUI, Toolbar, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router';

export default function AppBar() {
    return (
        <AppBarMUI position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/"
                        sx={{ mr: 2 }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/products"
                    >
                        Products
                    </Button>
                </Box>
            </Toolbar>
        </AppBarMUI>
    );
}