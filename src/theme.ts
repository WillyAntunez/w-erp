import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
    palette: {
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default theme;
