import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontSize: 16,
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                },
            },
        },
    },
});

export default theme;
