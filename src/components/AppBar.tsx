import { AppBar as AppBarMUI, Toolbar, Box } from '@mui/material';
import { AppBarButton } from './AppBarButton';
import { CartButton } from './CartButton';

export function AppBar() {
    return (
        <AppBarMUI position="sticky">
            <Toolbar>
                <Box display={"flex"} justifyContent={"space-between"} width={"100%"} alignItems={"center"}>
                    <Box>
                        <AppBarButton title="Strona główna" path="/" />
                        <AppBarButton title="Produkty" path="/products" />
                    </Box>
                    <Box>
                        <CartButton />
                    </Box>
                </Box>
            </Toolbar>
        </AppBarMUI>
    );
}