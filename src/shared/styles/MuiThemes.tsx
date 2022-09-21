import { responsiveFontSizes, createTheme } from '@mui/material';
import { palette } from '../utils/constants';

export const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: { main: palette.primary },
        text: {
            primary: palette.primary,
            secondary: palette.primary,
        },
    },
    typography: {
        fontFamily: [
            'Open Sans',
        ].join(','),
        h1: {
            fontWeight: 800,
            '@media (max-width:480px)': {
                fontSize: '3rem'
            },
        },
    },
}));
