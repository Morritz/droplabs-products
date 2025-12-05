import { Button } from "@mui/material";
import { Link, type To } from 'react-router';

interface AppBarButtonProps {
    title: string;
    path: To;
}

export function AppBarButton({ title, path }: AppBarButtonProps) {
    return <Button
        color="inherit"
        component={Link}
        to={path}
    >
        {title}
    </Button>
}